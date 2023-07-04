FROM ubuntu:latest
ARG APP_NAME
ARG VERSION
LABEL authors="sleepypoem"
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get -y install openjdk-17-jre && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
ADD /target/${APP_NAME}-${VERSION}.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]