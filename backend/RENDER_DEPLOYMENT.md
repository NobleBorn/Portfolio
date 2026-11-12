# Deploy the portfolio backend on Render

The backend uses Maven (wrapper 3.9.12), Java 25, Spring Boot 4.1.0, Spring MVC, JavaMail, and Actuator. No database or migration service is required. The Docker build runs tests, packages an executable JAR in a JDK stage, and copies only the JAR to a JRE runtime running as a non-root user.

## Important free-tier constraint

Render Free web services block outbound SMTP ports 25, 465, and 587. The existing Gmail integration uses 587, so **contact email will not work on Free**, even with valid credentials. To preserve the existing SMTP architecture, choose a paid instance supporting 587. An email provider HTTP API would require a separate implementation change. Free instances also spin down after inactivity and can have cold starts.

Source: [Render free service limitations](https://render.com/docs/free).

## 1. Push the changes to GitHub

Review and commit the Dockerfile, deployment configuration, and frontend API URL change, then push to the branch you want Render to deploy. Do not commit SMTP credentials or local environment files.

## 2. Create the web service

In Render, choose **New → Web Service**, connect GitHub, and select this repository. Use:

| Setting | Value |
| --- | --- |
| Branch | Your deployment branch |
| Language/runtime | Docker |
| Root Directory | `backend` |
| Dockerfile Path | `./Dockerfile` (relative to the root directory above) |
| Docker Build Context | `.` (the backend directory) |
| Docker Command | Leave empty; use the image entrypoint |
| Health Check Path | `/actuator/health/readiness` |
| Instance type | Free for startup/testing; paid for current Gmail SMTP functionality |

Do not enter Maven build/start commands for Docker deployment. Render builds the Dockerfile. The container listens on `0.0.0.0` and the supplied `PORT`; local default is 8080. `EXPOSE 8080` is metadata, not a restriction on Render's selected port.

Sources: [Docker on Render](https://render.com/docs/docker), [Web services](https://render.com/docs/web-services), [monorepo root directories](https://render.com/docs/monorepo-support).

## 3. Set runtime environment variables

Enter credentials in Render's environment settings, not Docker build arguments.

| Variable | Value / purpose |
| --- | --- |
| `CORS_ALLOWED_ORIGINS` | Exact frontend origin, e.g. `https://your-portfolio.example.com`; multiple origins separated by commas, without paths or trailing slashes |
| `SPRING_MAIL_USERNAME` | SMTP account, e.g. your Gmail address |
| `SPRING_MAIL_PASSWORD` | SMTP credential; a Gmail app password for the current Gmail setup |
| `CONTACT_RECEIVER_EMAIL` | Recipient of contact messages |
| `PORT` | Supplied by Render automatically; no manual value normally needed |
| `SPRING_MAIL_HOST` | Optional; defaults to `smtp.gmail.com` |
| `SPRING_MAIL_PORT` | Optional; defaults to `587` |
| `JAVA_TOOL_OPTIONS` | Optional override; image defaults to `-XX:MaxRAMPercentage=50.0 -XX:+ExitOnOutOfMemoryError` |

No `DATABASE_URL` or `SPRING_DATASOURCE_*` variables are needed. Local CORS defaults to `http://localhost:5173`. Credentials and recipient default to empty, allowing startup without secrets; sending mail requires real values. SMTP authentication and required STARTTLS remain enabled, with five-second connection/read/write timeouts. Provider changes may require corresponding TLS/auth settings.

Readiness checks application availability independently of SMTP. `/actuator/health` still reports overall health, including mail authentication/connectivity; a healthy readiness response does not confirm contact delivery. Only health endpoints are exposed, with details hidden.

## 4. Deploy and verify

1. Create/deploy the service and inspect its build logs. The Docker build runs `clean verify`, including the existing context-load test.
2. Confirm the runtime logs show Spring Boot started and Tomcat listening on Render's port.
3. Visit `https://YOUR-BACKEND.onrender.com/actuator/health/readiness`; expect HTTP 200 and `{"status":"UP"}`.
4. Check allowed-origin preflight (replace the sample URLs):

   ```bash
   curl -i -X OPTIONS 'https://YOUR-BACKEND.onrender.com/api/contact' \
     -H 'Origin: https://YOUR-FRONTEND.example.com' \
     -H 'Access-Control-Request-Method: POST' \
     -H 'Access-Control-Request-Headers: content-type'
   ```

   The response should allow your exact frontend origin. CORS only controls browser access; it is not endpoint authentication or abuse protection.

5. On an SMTP-capable plan with valid credentials, submit one contact message from your frontend and verify receipt. A successful send returns HTTP 200 with no response body. This step sends a real email.

## 5. Connect the frontend

Set this **frontend build-time** variable on its hosting provider:

```text
VITE_API_BASE_URL=https://YOUR-BACKEND.onrender.com
```

Then rebuild/redeploy the frontend. It appends `/api/contact` automatically. Vite variables are public: never put SMTP credentials in them. An unset value keeps local development using `http://localhost:8080`.

Set the backend's `CORS_ALLOWED_ORIGINS` to that frontend's exact HTTPS origin and redeploy it. Setting the frontend variable on the backend alone has no effect. The frontend and backend remain separate applications.

## Local Docker checks

With Docker Desktop running, from the repository root:

```bash
docker build -t portfolio-backend:render ./backend
docker run --rm --name portfolio-backend-check --memory=512m \
  -p 18080:10000 -e PORT=10000 \
  -e CORS_ALLOWED_ORIGINS=https://portfolio.example.com \
  portfolio-backend:render
```

In another terminal:

```bash
curl -i http://localhost:18080/actuator/health/readiness
```

Stop the container with Ctrl+C. To test actual mail delivery, pass environment variables from your shell using `-e SPRING_MAIL_USERNAME -e SPRING_MAIL_PASSWORD -e CONTACT_RECEIVER_EMAIL`; avoid putting literal secrets in command history. Local Docker does not reproduce Render's SMTP restrictions.

The runtime uses a JRE instead of a build JDK, has no Maven/source/test files, runs as a non-root account, and limits heap to half the container memory to leave room for native allocations. The image tags track Java 25 updates; pin reviewed digests if immutable base images are required. Dependency caching separates Maven metadata from source changes. Docker build context excludes local outputs, environment files, and common key files.

## Troubleshooting

- **Contact times out on Free:** SMTP ports are blocked; credentials alone cannot resolve it.
- **Overall health is DOWN but readiness is UP:** inspect SMTP configuration and provider/network access.
- **Browser CORS failure:** check the exact frontend origin, allowed Content-Type header, POST method, and frontend build-time API URL.
- **Frontend still calls localhost:** set `VITE_API_BASE_URL` in the frontend build environment and rebuild.
- **Port scan failure:** verify `PORT`, the startup logs, and binding to `0.0.0.0`.
- **Slow first request:** Free instances may be waking from inactivity.
- **Container exits for memory:** inspect Render metrics/logs before changing heap settings or instance size.

## Verification performed on 2026-11-12

- Host Maven `clean verify`: passed, including the existing context-load test.
- Docker image build: passed, including the same test inside the Java 25 Linux build stage.
- Runtime smoke test with a 512 MB container limit and `PORT=10000`: application started successfully and readiness returned HTTP 200 with `{"status":"UP"}`.
- Runtime account confirmed non-root (`uid=999`, user `app`).
- Unapproved-origin preflight returned HTTP 403. The allowed-origin preflight was not run because its tool permission request was declined; verify it using the command above.
- Frontend type-check and production build passed. The build still reports the existing large JavaScript chunk warning.
- No email was sent, no load testing was performed, and no Render service was created or deployed. Local container startup does not establish production SMTP delivery or sustained memory requirements.
