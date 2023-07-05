FROM openjdk:19
ARG APP_NAME
ARG VERSION
ADD /target/${APP_NAME}-${VERSION}.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]