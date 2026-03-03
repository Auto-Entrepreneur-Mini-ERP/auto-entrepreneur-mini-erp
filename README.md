# 🚀 Auto-Entrepreneur Mini ERP

Auto-Entrepreneur Mini ERP is a full-stack ERP (Enterprise Resource Planning) application designed specifically for **auto-entrepreneurs and small businesses**.  

It helps manage clients, products/services, invoices, and core business operations in a simple and structured way.

---

## 🧱 Architecture

This project is structured as a monorepo:

```
auto-entrepreneur-mini-erp/
│
├── client/                 # Frontend application
├── server/                 # Backend API
├── docker-compose.yml      # Production containers
├── docker-compose.dev.yml  # Development containers
└── README.md
```

### 🔹 Frontend
- Modern UI
- Dashboard-based interface
- Business management screens
- Built with TypeScript

### 🔹 Backend
- RESTful API
- Authentication & Authorization
- Business logic
- Database integration
- Secure environment configuration

---

## ✨ Core Features

- 👤 User Authentication (Register / Login)
- 🧾 Invoice Management
- 📦 Product & Service Management
- 👥 Client Management
- 📑 Quote & Invoice Management
- 💸 Payments & Depenses Management
- 📊 Dashboard Overview
- 🔐 Secure password hashing
- 🗄 Database integration
- 🐳 Docker support for easy deployment

---

## 🛠 Tech Stack

### Frontend
- TypeScript
- Modern JS framework
- TailwindCSS
- REST API integration

### Backend
- Node.js
- Express
- TypeScript
- JWT Authentication
- Prisma Database ORM
- Environment-based configuration

### DevOps
- Docker
- Docker Compose

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Auto-Entrepreneur-Mini-ERP/auto-entrepreneur-mini-erp.git
cd auto-entrepreneur-mini-erp
```

---

## ❗❗ Before Running the App (Recommended)

This application also supports **file uploads to WS S3** and includes an **emailing system** that requires SMTP configuration or a sandbox service like MailTrap.

## 🐳 Run with Docker (Recommended)

### Development Mode

```bash
docker-compose -f docker-compose.dev.yml up --build
```

### Production Mode

```bash
docker-compose up --build
```

---

## 💻 Run Without Docker

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder and copy everything:

```bash
SERVER_PORT=3001
FRONT_END_URL='http://localhost:5173'

# JUST FOR DEVELOPMENT
DATABASE_URL="mysql://root:root@localhost:3306/auto_entrepreneur_erp_db"
DATABASE_USER="root"
DATABASE_PASSWORD="root"
DATABASE_NAME="auto_entrepreneur_erp_db"
DATABASE_HOST="mysql"
DATABASE_PORT=3306

# JWT
JWT_SECRET="auto-entrepreneur-secret-key-12345#.2026@odc"

# Mail Trap credentials
EMAIL_HOST=
EMAIL_USER=
EMAIL_PASSWORD=

# AWS S3 Bucket credentials
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=
```

Make sure your database is running before starting the server.

---

## 📦 Database

- Ensure your database is configured properly
- Run migrations if required
- Verify connection before starting the server

---

## 📌 Project Goals

This project aims to provide:

- A lightweight ERP solution
- Clean architecture
- Scalable structure
- Easy deployment
- Practical real-world full-stack example

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Built for learning, practice, and real-world business use.

