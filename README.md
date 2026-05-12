# AI-Adaptive-LMS-Project
# Microservices-Based AI Adaptive LMS

## 📌 Project Overview
This project is a **Microservices-Based AI Adaptive Learning Management System (LMS)** designed to provide a scalable, modular, and intelligent learning platform. It uses a distributed architecture with separate services for frontend, backend, and AI processing.

---

## 🚀 Features
- User-friendly frontend interface
- REST API-based backend (Node.js)
- AI-based learning adaptation logic (basic simulation)
- Modular microservices architecture
- Scalable and maintainable structure
-------------
The system is divided into three core autonomous services:

Auth Service (Node.js): Manages user registration, login, and secure JWT-based session handling.

AI Engine (Python): A background worker that monitors student performance and triggers level promotions.

Database (MongoDB): A NoSQL repository for high-speed data persistence and inter-service synchronization.

🚀 Key Features
Adaptive Learning: Automatic level shifting based on an 80% mastery threshold.

Fault Isolation: If the AI Engine is down, the Auth service remains operational.

Containerized: Fully Dockerized for "ship-anywhere" deployment.

Stateless Security: Implements JSON Web Tokens (JWT) for secure API communication.

---

## 🏗️ Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB (optional setup)
- Architecture: Microservices

---

## 📁 Project Structure
