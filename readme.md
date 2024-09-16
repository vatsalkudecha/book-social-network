# Book Social Network

Book Social Network is a full-stack application that enables users to manage their book collections and engage with a community of book enthusiasts. The application provides a range of features, from user registration to secure book borrowing and return functionalities. It is built with a strong focus on security and follows best practices for REST API design.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
    - [Backend (book-network)](#backend-book-network)
    - [Frontend (book-network-ui)](#frontend-book-network-ui)
3. [Learning Objectives](#learning-objectives)
4. [Class Diagram](#class-diagram)
5. [Security Diagram](#security-diagram)

---

## Features

- **User Registration:** Allows users to register a new account.
- **Email Validation:** Activates accounts using secure email validation codes.
- **User Authentication:** Secure login for existing users.
- **Book Management:** Users can create, update, share, and archive books in their collection.
- **Book Borrowing:** Checks for availability before borrowing.
- **Book Returning:** Facilitates the return of borrowed books.
- **Book Return Approval:** Enables admins or owners to approve book returns.

---

## Technologies Used

### Backend (book-network)

- Spring Boot 3
- Spring Security 6
- JWT Token Authentication
- Spring Data JPA
- Spring Validation
- OpenAPI and Swagger UI Documentation
- Docker

### Frontend (book-network-ui)

- Angular
- Component-Based Architecture
- Lazy Loading
- Authentication Guard
- OpenAPI Generator for Angular
- Bootstrap

---

## Learning Objectives

- Designing a class diagram from business requirements
- Implementing a mono repo approach
- Securing an application using JWT tokens with Spring Security
- Registering users and validating accounts via email
- Utilizing inheritance with Spring Data JPA
- Implementing the service layer and handling application exceptions
- Object validation using Spring Validation
- Handling custom exceptions
- Implementing pagination and REST API best practices
- Using Spring Profiles for environment-specific configurations
- Documenting APIs using OpenAPI and Swagger UI
- Implementing business requirements and handling business exceptions
- Dockerizing the infrastructure

---

## Class Diagram

![Class Diagram](./screenshots/class-diagram.png)

---

## Security Diagram

![Security Diagram](./screenshots/security.png)

### Basic Docker commands to use:

- docker compose down
- docker compose up -d

- book-network> ./mvnw clean package -DskipTests
- book-network> docker build -t bsn/bsn:1.0.3 -f ../docker/backend/Dockerfile .
- book-network> docker build --build-arg="APP_VERSION=1.0.3" -t bsn/bsn:1.0.3 -f ../docker/backend/Dockerfile .

- book-network-ui> docker build -t bsn/bsn-ui:1.0.0 -f ../docker/frontend/Dockerfile .