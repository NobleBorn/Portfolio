# syntax=docker/dockerfile:1
FROM eclipse-temurin:25-jdk-jammy AS build
WORKDIR /build

# Cache dependency downloads separately from application sources.
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
RUN sh ./mvnw -B -ntp dependency:go-offline

COPY src/ src/
RUN sh ./mvnw -B -ntp clean verify \
    && cp target/demo-0.0.1-SNAPSHOT.jar /build/app.jar

FROM eclipse-temurin:25-jre-jammy AS runtime
WORKDIR /app
RUN groupadd --system app && useradd --system --gid app --home-dir /app app
COPY --from=build --chown=app:app /build/app.jar ./app.jar
USER app

# Leave memory for metaspace, native buffers, threads, and the OS on small instances.
ENV JAVA_TOOL_OPTIONS="-XX:MaxRAMPercentage=50.0 -XX:+ExitOnOutOfMemoryError"
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
