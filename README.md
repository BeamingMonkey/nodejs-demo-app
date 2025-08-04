# nodejs-demo-app

A simple Node.js app built to demonstrate a full CI/CD pipeline using **GitHub Actions** and **DockerHub**.

## 🌐 App Features

- Express-based Node.js server
- `/` → Hello message
- `/health` → Health check + version
- `.env` support
- Dockerized (multi-stage build)

## 🚀 CI/CD Pipeline

This app is deployed via GitHub Actions. On each push to the `main` branch:
1. Installs dependencies
2. Runs basic tests
3. Builds Docker image
4. Pushes image to DockerHub:  
   **`docker.io/YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest`**

## 📦 Running the App via Docker

```bash
docker pull YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest
docker run -p 3000:3000 YOUR_DOCKERHUB_USERNAME/nodejs-demo-app