# 📌 Overview

## 🚀 Cloud Task Manager API
A full-stack Task Management system built with Node.js, Express, MongoDB, Docker, and AWS EC2, featuring CI/CD-ready deployment via GitHub Actions.

## ⚡ Features
🟢 RESTful API (CRUD operations)
🟢 Dockerized backend
🟢 MongoDB Atlas / Local support
🟢 AWS EC2 deployment
🟢 GitHub Actions CI/CD pipeline
🟢 Auto-redeploy on push
🟢 Production-ready architecture

## 🧱 Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
Docker
AWS EC2 (Ubuntu)
GitHub Actions (CI/CD)
HTML/CSS (basic frontend)

## 📁 Project Structure
cloud-task-manager/
│
├── server.js          # Main Express API server
├── app.js             # MongoDB connection (optional split)
├── models/            # Mongoose models
├── routes/            # API routes (optional structure)
├── .env               # Environment variables
├── Dockerfile         # Container setup
├── docker-compose.yml # (optional)
└── frontend/          # Simple UI (optional)

## 🏗️ System Architecture
![image_alt](https://github.com/FRED2030/cloud-task-manager/blob/bcb986e8498df0f6934fc1a64c7652dd715ecdf5/System%20Architecture.png)

## ⚙️ Local Setup 
1. Clone repository
2. git clone https://github.com/my-username/cloud-task-manager.git
3. cd cloud-task-manager

## Install dependencies
npm install

## Setup environment variables
### Create .env file:
MONGO_URI=mongodb://localhost:27017/taskdb
PORT=3000
Or MongoDB Atlas:
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskdb

## Run server
node server.js

## Test (Both) API-Locally / Externally 
curl http://localhost:3000/tasks

## 🐳 Run with Docker
Build image
docker build -t task-api .

## Run container
docker run -d -p 3000:3000 --name task-api task-api



## ☁️ AWS EC2 Deployment (Step-by-Step)
Launch EC2 instance
Ubuntu 22.04
t2.micro / t3.micro (optional)

## Connect to server
ssh ubuntu@my-ec2-ip

## Install Docker
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker

## Pull project image
docker pull your-dockerhub/task-api:latest

## Run container
docker run -d -p 3000:3000 --name task-api your-dockerhub/task-api:latest

## Open port in AWS
### Security Group → Inbound Rules:
Type	Port	Source
HTTP	3000	0.0.0.0/0

## 🔁 CI/CD Pipeline (GitHub Actions)
### Workflow steps:
Push code to GitHub
GitHub Actions builds Docker image
Push image to Docker Hub
SSH into EC2
Pull latest image
Restart container
Update task
![image_alt](


## Example deployment script
docker pull your-dockerhub/task-api:latest

docker stop task-api || true
docker rm task-api || true

docker run -d -p 3000:3000 \
--name task-api \
your-dockerhub/task-api:latest

## 📡 API Endpoints
### Get all tasks
GET /tasks

### Create task 
POST /tasks
Body: { "title": "My task" }

### Update task
PUT /tasks/:id

### Delete task
DELETE /tasks/:id

### 🧪 Example Response
![image_](

[
  {
    "_id": "123",
    "title": "My first task",
    "completed": false
  }
]


## 👨‍💻 Author

### Fred King

DevOps / Backend Developer
Cloud | Docker | AWS | Node.js


