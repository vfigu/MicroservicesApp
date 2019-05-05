# Start with a base image containing Java runtime
FROM openjdk:9

# Add a volume pointing to /tmp
VOLUME /tmp

# The application's jar file
ARG JAR_FILE=target/currency-conversion-service.jar

# Add the application's jar to the container
ADD ${JAR_FILE} currency-conversion-service.jar

# Run the jar file 
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/currency-conversion-service.jar"]
