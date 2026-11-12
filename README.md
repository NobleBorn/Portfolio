# NobleBorn — Developer Portfolio

Personal developer portfolio, built around a galaxy background, glass panels, and an OS-inspired navigation dock. The interface uses CSS, SVG, and images for its visual effects.

## Features

- Homepage with introduction, social links, single-track audio player, and icon-based project shortcuts.
- Project cards with descriptions, technology tags, images, and demo/source links.
- Responsive skills grid with layered tiles and hover effects.
- Experience timeline covering internships, thesis research, teaching, and IT management.
- Contact form backed by a Spring Boot email endpoint.
- Shared navigation, live date/time, and browser battery information where supported.

## Technology stack

| Frontend | Backend |
| --- | --- |
| Vue 3, TypeScript, Vite | Java 25, Spring Boot 4.1 |
| Vue Router, Font Awesome | Spring MVC, JavaMail, Actuator |
| Custom CSS and SVG | Maven wrapper |

## Backend deployment

See [the Render deployment guide](backend/RENDER_DEPLOYMENT.md) for GitHub setup, environment variables, Docker build/run commands, and verification steps.

The backend uses a multi-stage Java 25 Docker build with a non-root JRE runtime. It reads Render's `PORT`, supports configurable CORS via `CORS_ALLOWED_ORIGINS`, and requires no database. SMTP credentials belong in runtime environment variables. Set `VITE_API_BASE_URL` when building the frontend to connect it to the deployed backend.

**Render Free blocks Gmail's SMTP port 587.** The backend can run on Free, but current contact email needs an SMTP-capable paid instance. Readiness at `/actuator/health/readiness` checks application availability separately from mail health. See [Render's free-tier limitations](https://render.com/docs/free).
