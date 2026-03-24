
# 🌍 StaySphere

A full-stack MERN web application that allows users to explore, create, and review unique stays like mountains, farms, pools, and rooms.

🔗 **Live Demo:** https://stay-sphere-kltt.onrender.com

---

## 🚀 Features

* 🔐 User Authentication & Authorization (Signup/Login)
* 🏡 Create, Edit & Delete Listings
* 📸 Image Upload with Cloudinary
* ⭐ Review & Rating System
* 🔍 Search Listings by Title
* 🗂️ Category-Based Filtering (Mountain, Farm, Pool, Room)
* 🛡️ Server-side Validation (Prevents unauthorized access)
* 👤 Only listing owners can edit/delete their listings

---

## 🛠️ Tech Stack

**Frontend**

* HTML
* CSS
* EJS

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB
* Mongoose

**Other Tools**

* Cloudinary (Image Storage)
* Multer (File Upload)
* Express-Session
* Passport.js (Authentication)

---

## 📂 Project Structure

StaySphere/
│
├── models/          # Mongoose Schemas
├── routes/          # Express Routes
├── controllers/     # Business Logic
├── views/           # EJS Templates
├── public/          # Static Files (CSS, JS)
├── utils/           # Utility Functions
├── middleware.js    # Custom Middleware
├── app.js           # Main Server File
└── cloudConfig.js   # Cloudinary Config

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/staysphere.git
cd staysphere
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret

DB_URL=your_mongodb_url
SESSION_SECRET=your_secret
```

### 4️⃣ Run the application

```bash
node app.js
```

or (for development)

```bash
nodemon app.js
```

---

## 🌐 Deployment

The project is deployed on **Render**.

**Steps followed:**

* Push code to GitHub
* Connect repository to Render
* Add environment variables
* Deploy as a Web Service

---

## 📸 Screenshots

(Add screenshots here to improve project presentation)

Example:

```
![Home](./screenshots/home.png)
```

---

## 📈 Future Improvements

* 💬 Real-time chat system
* 🗺️ Map integration (Mapbox / OpenStreetMap)
* ❤️ Wishlist / Favorites feature
* 📱 Fully responsive UI
* 🔔 Notification system

---

## 🙌 Acknowledgements

* Cloudinary (Image hosting)
* MongoDB Atlas (Database)
* Render (Deployment)

---

## 📬 Contact

* LinkedIn: https://linkedin.com/in/YOUR-LINK
* GitHub: https://github.com/YOUR-USERNAME

---

⭐ If you like this project, consider giving it a star!
