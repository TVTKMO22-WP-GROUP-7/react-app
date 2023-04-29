FROM openjdk:17
LABEL maintainer="myname"
COPY ./backend-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]