# 🚀 CI/CD Pipeline with Node.js, Docker & GitHub Actions

## 📌 Project Overview

This project demonstrates a complete **CI/CD pipeline** using:

* Node.js (Express API)
* Jest & Supertest (Testing)
* Docker (Containerization)
* GitHub Actions (Automation)

The pipeline automatically builds, tests, and deploys the application whenever code is pushed to GitHub.

---

## ⚙️ Technologies Used

* Node.js
* Express.js
* Jest
* Supertest
* Docker
* GitHub Actions

---

## 📁 Project Structure

```
ci-cd-node-app/
│── index.js
│── package.json
│── Dockerfile
│── .gitignore
│── .github/workflows/ci-cd.yml
│── tests/
    │── health.test.js
```

---

## 🌐 API Endpoint

### GET /health

Returns server status

**Response:**

```json
{
  "status": "OK"
}
```

---

## 🧪 Running Tests

```bash
npm test
```

Uses **Jest + Supertest** to verify API functionality.

---

## 🐳 Docker Setup

### Build Image

```bash
docker build -t node-app .
```

### Run Container

```bash
docker run -d -p 3000:3000 node-app
```

---

## ⚡ CI/CD Pipeline (GitHub Actions)

The pipeline runs automatically on every push to the `main` branch.

### Steps:

1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Run tests
5. Build Docker image
6. Run application container

---

## 🚀 How to Run Locally

```bash
npm install
node index.js
```

Open in browser:

```
http://localhost:3000/health
```

---

## 💡 Key Features

* Automated testing before deployment
* Docker-based containerization
* Fully automated CI/CD pipeline
* Clean project structure

---

## ⚠️ Important Note

Server is conditionally started using:

```js
if (require.main === module) {
    app.listen(3000);
}
```

This prevents server from running during testing.

---

## 🔮 Future Improvements

* Push Docker image to Docker Hub
* Deploy on AWS EC2
* Integrate SonarQube for code quality

---

## 👨‍💻 Author

Your Name

---

## 📌 Conclusion

This project demonstrates how CI/CD pipelines automate development workflows, ensuring faster, reliable, and error-free deployments.
