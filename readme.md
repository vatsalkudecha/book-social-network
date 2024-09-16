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
6. [Getting Started](#getting-started)
    - [Backend Setup Instructions](#backend-setup-instructions)
    - [Frontend Setup Instructions](#frontend-setup-instructions)

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

By following this project, students will learn:

- Designing a class diagram from business requirements
- Implementing a mono repo approach
- Securing an application using JWT tokens with Spring Security
- Registering users and validating accounts via email
- Utilizing inheritance with Spring Data JPA
- Implementing the service layer and handling application exceptions
- Object validation using JSR-303 and Spring Validation
- Handling custom exceptions
- Implementing pagination and REST API best practices
- Using Spring Profiles for environment-specific configurations
- Documenting APIs using OpenAPI and Swagger UI
- Implementing business requirements and handling business exceptions
- Dockerizing the infrastructure
- CI/CD pipeline & deployment

---

## Class Diagram

![Class Diagram](./screenshots/class-diagram.png)

---

## Security Diagram

![Security Diagram](./screenshots/security.png)

---

## Getting Started

To get started with the Book Social Network project, follow the setup instructions in the respective directories:

### [Backend Setup Instructions](backend/README.md)

Refer to the backend `README.md` file for detailed setup instructions.

### [Frontend Setup Instructions](frontend/README.md)

Refer to the frontend `README.md` file for detailed setup instructions.
