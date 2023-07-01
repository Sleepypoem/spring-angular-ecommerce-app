FROM ubuntu:latest
ARG PACKAGE_NAME
ARG PACKAGE_VERSION
LABEL authors="sleepypoem"
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get -y install openjdk-17-jre && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
ADD /target/${PACKAGE_NAME}-${PACKAGE_VERSION}.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]