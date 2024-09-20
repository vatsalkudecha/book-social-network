# Build stage
FROM maven:3.8.7-openjdk-18 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM openjdk:17-jdk-slim
# ARG PROFILE=dev
# ARG APP_VERSION=1.0.3


WORKDIR /app
COPY --from=build /app/target/book-network-1.0.3.jar .

# Extract the JAR version
EXPOSE 8088

# CMD java -jar -Dspring.profiles.active=${ACTIVE_PROFILE} -Dspring.datasource.url=${DB_URL} book-network-${JAR_VERSION}.jar

ENTRYPOINT ["java", "-jar", "/app/book-network-1.0.3.jar"]