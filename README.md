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
- Below is the full project directory structure:

<img width="444" height="829" alt="image" src="https://github.com/user-attachments/assets/79d6336d-25d3-4655-a5b1-0a92fe378b6b" />

---

## 🧩 Assumptions

- Users can browse the menu without logging in.
- Cash-on-delivery is the default payment method (Stripe integration is optional).
- Order status follows a simple flow:
- **pending → preparing → out for delivery → delivered**
- All image uploads are stored inside:
- Only a single admin role is assumed.
- JWT Authentication is used for both **user** and **admin** login sessions.

---

## 🎁 Bonus Features Implemented

- ✔ **Stripe payment integration** (optional)
- ✔ **React Toastify** for instant success/error notifications
- ✔ **Image uploads using Multer**
- ✔ **JWT-protected routes** for secure dashboards and user features
- ✔ **Reusable UI components** in both frontend and admin panel
- ✔ **Responsive UI** for mobile, tablet, and desktop
- ✔ **Backend error-handling middleware** for clean API responses
- ✔ **Clean MVC architecture** for backend (controllers, routes, models)

---

## 📌 Future Enhancements

- **Real-time order tracking** using Socket.IO  
- **Search, filter, and category-based** food selection  
- **Coupon / discount system** for promotions  
- **Delivery partner module** (tracking, assigning orders)  
- **Admin analytics dashboard** (sales insights, order metrics)  
- **Multi-admin role support** with role-based permissions  




