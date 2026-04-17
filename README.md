📌 Overview
A full-stack Task Manager API built with Node.js, Express, and MongoDB, fully containerized with Docker and deployed to AWS EC2 using CI/CD automation.

⚡ Features
🟢 RESTful API (CRUD operations)
🟢 Dockerized backend
🟢 MongoDB Atlas / Local support
🟢 AWS EC2 deployment
🟢 GitHub Actions CI/CD pipeline
🟢 Auto-redeploy on push
🟢 Production-ready architecture

🧱 Tech Stack
Layer	Technology
Backend	Node.js, Express
Database	MongoDB (Mongoose)
Container	Docker
Cloud	AWS EC2
CI/CD	GitHub Actions
Runtime	Linux (Ubuntu)

🏗️ System Architecture
![image_alt](https://github.com/FRED2030/cloud-task-manager/blob/bcb986e8498df0f6934fc1a64c7652dd715ecdf5/System%20Architecture.png)


📁 Project Structure
cloud-task-manager/
│
├── server.js          # Express API
├── app.js             # MongoDB connection
├── models/            # Mongoose schemas
├── .env               # Environment variables
├── Dockerfile         # Docker setup
├── .github/workflows/ # CI/CD pipeline
└── frontend/          # Simple UI (optional)


🚀 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Create task
PUT	/tasks/:id	Update task
DELETE	/tasks/:id	Delete task


🐳 Docker Setup
docker build -t task-api .
docker run -d -p 3000:3000 --name task-api task-api


☁️ AWS EC2 Deployment
ssh ubuntu@your-ec2-ip

docker pull your-dockerhub/task-api:latest

docker stop task-api || true
docker rm task-api || true

docker run -d -p 3000:3000 --name task-api your-dockerhub/task-api:latest


🔁 CI/CD Pipeline
