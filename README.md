# 🍔 Food Delivery Application

A full-stack food delivery web application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project includes a customer-facing frontend, an admin panel for managing orders and menu items, and a robust backend API.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Customer Frontend
- 🏠 Browse food items by category (Salad, Rolls, Desserts, Sandwich, Cake, Pure Veg, Pasta, Noodles)
- 🛒 Add/remove items to/from cart with quantity management
- 👤 User authentication (Login/Register)
- 💳 Place orders with delivery information
- 📱 Responsive design for mobile and desktop
- ⭐ Product ratings display
- 📦 Order tracking and history

### Admin Panel
- ➕ Add new food items with images
- 📋 View and manage all food items
- 🗑️ Remove food items
- 📊 View and manage orders
- 📈 Order status updates

### Backend API
- 🔐 JWT-based authentication
- 🖼️ Image upload handling with Multer
- 🗄️ MongoDB database integration
- 🛡️ Secure password hashing with bcrypt
- 💰 Stripe payment integration
- 📧 Order confirmation system

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Context API for state management
- Axios for API calls
- CSS3 for styling
- Vite as build tool

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password encryption
- Multer for file uploads
- Stripe for payment processing
- Cors for cross-origin requests

**Admin Panel:**
- React.js
- Vite
- React Toastify for notifications
- Axios for API integration

## 📁 Project Structure

```
food-deliver/
├── frontend/          # Customer-facing React application
│   ├── src/
│   │   ├── assets/    # Images and static files
│   │   ├── components/# React components
│   │   ├── context/   # Context API state management
│   │   ├── pages/     # Page components
│   │   └── App.jsx    # Main app component
│   └── package.json
│
├── admin/             # Admin panel React application
│   ├── src/
│   │   ├── assets/    # Admin assets
│   │   ├── components/# Admin components
│   │   ├── pages/     # Admin pages (Add, List, Orders)
│   │   └── App.jsx
│   └── package.json
│
└── backend/           # Node.js/Express API server
    ├── config/        # Database configuration
    ├── controllers/   # Route controllers
    ├── middleware/    # Auth middleware
    ├── models/        # Mongoose models
    ├── routes/        # API routes
    ├── uploads/       # Uploaded images storage
    └── server.js      # Main server file
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### Clone the Repository
```bash
git clone https://github.com/umesha2001/food-delivery-site.git
cd food-deliver
```

### Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

**Admin Panel:**
```bash
cd admin
npm install
```

## ⚙️ Configuration

### Backend Environment Variables
Create a `.env` file in the `backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=4000
```

### Frontend Configuration
Update the API URL in `frontend/src/context/StoreContext.jsx`:
```javascript
const url = "http://localhost:4000";
```

### Admin Configuration
Update the API URL in the admin panel if needed.

## 🏃 Running the Application

### Start Backend Server
```bash
cd backend
npm run server
# or
node server.js
```
Backend will run on `http://localhost:4000`

### Start Frontend
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173` (or the port shown in terminal)

### Start Admin Panel
```bash
cd admin
npm run dev
```
Admin panel will run on `http://localhost:5174` (or the port shown in terminal)

## 🔌 API Endpoints

### User Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login

### Food Routes
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `POST /api/food/remove` - Remove food item (Admin)

### Cart Routes
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `GET /api/cart/get` - Get user's cart

### Order Routes
- `POST /api/order/place` - Place new order
- `GET /api/order/userorders` - Get user's orders
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

## 📸 Screenshots

*Add screenshots of your application here*

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Umesha**
- GitHub: [@umesha2001](https://github.com/umesha2001)

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this project
- Food images from various sources
- Icons and assets from open-source libraries

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

Made with ❤️ by Umesha
