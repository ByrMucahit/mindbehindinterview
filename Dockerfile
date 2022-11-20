FROM openjdk:15-jdk-alpine as builder
EXPOSE 8080
WORKDIR /app
COPY build/libs/mindbehindinterview-0.0.1-SNAPSHOT.jar .
ENTRYPOINT [ "java", "-jar", "mindbehindinterview-0.0.1-SNAPSHOT.jar" ]

