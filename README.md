# 🍽️ Yam-Yam – Full-Stack Food Delivery Platform

Yam-Yam is a complete food delivery system composed of:

- 👤 **User Website** (React + Vite)
- 🛠️ **Admin Panel** (React + Vite)
- 🗄️ **Backend API** (Node.js + Express + MongoDB)

The platform supports menu browsing, cart management, order placement, food item management, image uploads, JWT authentication, toast notifications, and optional Stripe payments.

---

## 🚀 Tech Stack & Tools

### 🖥️ Frontend (User Website)
- React 18
- Vite
- React Router DOM
- Axios
- React Toastify
- Stripe JS
- ESLint + React plugins

### 🛠️ Admin Panel
- React
- Vite
- React Router DOM
- Axios
- React Toastify
- ESLint + React plugins

### 📡 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (image uploads)
- JSON Web Token (JWT)
- Stripe SDK
- Validator
- bcrypt
- body-parser
- cors
- dotenv
- nodemon

---

## 📁 Project Structure

The **food-del** project is organized into three main parts:  
1. **frontend** – User-facing website  
2. **admin** – Admin dashboard  
3. **backend** – Server-side API  

Below is the full project directory structure:
food-del/
│
├── frontend/ # User-facing React application (Vite)
│ ├── .eslintrc.cjs
│ ├── .gitignore
│ ├── index.html
│ ├── package.json
│ ├── package-lock.json
│ ├── vite.config.js
│ ├── public/
│ ├── src/
│ └── food frontend/ # Folder seen in user directory listing
│
├── backend/ # Node.js + Express REST API
│ ├── .env
│ ├── .gitignore
│ ├── server.js
│ ├── package.json
│ ├── package-lock.json
│ ├── config/ # DB, environment configuration
│ ├── controllers/ # Route logic controllers
│ ├── middleware/ # Request middlewares (auth, validation)
│ ├── models/ # Mongoose schemas / collections
│ ├── routes/ # Express API routes
│ ├── uploads/ # Image uploads via multer
│ └── node_modules/
│
└── admin/ # Admin dashboard (React + Vite)
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── public/
├── src/
└── node_modules/

