# 🩸 Blood Bank Management System

A full-stack Blood Bank Management System designed to connect blood donors and recipients through a secure and user-friendly platform.

The application allows users to register, log in securely, manage their profiles, and access a personalized dashboard. It is built using modern web technologies and follows a client-server architecture.

---

## 🚀 Features

### Authentication

* User Registration
* User Login
* JWT-Based Authentication
* Protected Routes
* Secure Password Hashing using bcrypt

### User Management

* Donor and Receiver Registration
* Blood Group Information
* City-Based User Details
* User Dashboard

### User Interface

* Responsive Design
* Modern Landing Page
* Interactive Navigation
* Dashboard Overview

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* PostgreSQL
* Prisma Studio

### Development Tools

* Docker
* Nodemon
* Git & GitHub

---

## 📂 Project Structure

```text
Blood-Bank-Management-System
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── database/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── server.js
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/ShreyasG-23/Blood-Bank-Management-System.git
cd Blood-Bank-Management-System
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔐 Authentication Flow

```text
Register
   ↓
Password Hashing
   ↓
Store User in PostgreSQL
   ↓
Generate JWT
   ↓
Login
   ↓
Access Protected Dashboard
```

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Login Page
* Registration Page
* Dashboard

---

## 🎯 Future Enhancements

* Blood Request Management
* Donor Search System
* Admin Dashboard
* Profile Management
* Blood Request Tracking
* Email Notifications
* Analytics Dashboard

---

## 👨‍💻 Author

**Shreyas Gunagi**

GitHub: https://github.com/ShreyasG-23

---

## 📄 License

This project is developed for learning and academic purposes.
