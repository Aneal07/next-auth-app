# 🚀 Next.js Authentication App

## 🌟 Overview
A Next.js authentication app that provides secure and seamless authentication using NextAuth.js. It supports multiple authentication providers such as Google, GitHub, and Credentials-based login.

## 🎯 Features
- 🔑 **Secure authentication with NextAuth.js**
- 🌍 **OAuth providers (Google, GitHub, etc.)**
- 🔐 **Credentials-based authentication**
- ⚡ **Session management**
- 🏗 **Protected routes & middleware support**
- 📱 **Responsive UI with Tailwind CSS**

## 🛠 Technologies Used
- **Frontend:** Next.js, React.js, Tailwind CSS
- **Authentication:** NextAuth.js
- **Database:** MongoDB with Mongoose (optional for user persistence)
- **State Management:** Context API

---

## ⚡ Installation Guide

### ✅ Prerequisites
- Install **Node.js**
- (Optional) Set up a **MongoDB database**

### 📌 Steps to Set Up
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Aneal07/next-auth-app.git
   cd next-auth-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env.local` file in the root directory and add:
     ```sh
     NEXTAUTH_SECRET=your_secret_key
     NEXTAUTH_URL=http://localhost:3000
     GITHUB_ID=your_github_client_id
     GITHUB_SECRET=your_github_client_secret
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     ```
4. **Run the application:**
   ```sh
   npm run dev
   ```

---

## 🔌 API Endpoints
| Method | Endpoint         | Description                     |
|--------|-----------------|---------------------------------|
| GET    | /api/auth       | NextAuth authentication routes |
| POST   | /api/auth/signin  | Sign in to the application     |
| POST   | /api/auth/signout | Sign out from the application  |

---

## 🤝 Contributing
Feel free to submit **issues** and **pull requests** to improve the project. Suggestions are always welcome!

## 📜 License
This project is licensed under the **MIT License**.

---

💡 **Happy Coding!** 🚀

