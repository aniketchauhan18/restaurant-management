# Restaurant-Management

## Introduction

Restaurant App is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js). The app provides two roles: admin and user. Users can view restaurants and their menus, while admins have the ability to create, update, and delete restaurants and menus. The application incorporates JWT for user authentication and bcrypt for password hashing.

## Tech Stack

- **Frontend:** React, Tanstack Query React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)
- **Password Hashing:** bcrypt

## Features

### User Role

- View a list of restaurants
- View the menus of each restaurant

### Admin Role

- Create new restaurants
- Update existing restaurants
- Delete restaurants
- Create new menu items for a restaurant
- Update existing menu items
- Delete menu items

## Setup and Installation

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/aniketchauhan18/restaurant-management.git
   cd restaurant-management
   ```

2. **Backend Setup**

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add the following environment variables:
     ```plaintext
     PORT = 3000
     MONGODB_URI=mongodb://<username>:<password>@<host>:<port>/<database>
     SECRET_KEY=your_jwt_secret
     CORS_ORIGIN = http://localhost:5173
     ```
   - Start the backend server:
     ```bash
     npm start
     nodemon index.js
     ```

3. **Frontend Setup**
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

## Usage (Not the final UI)

Certainly! Here's an updated section for admin signup:

---

### Admin Signup

1. Navigate to the signup page.
2. Select "Admin" as the role.
3. Fill in the required information, including username, email, and password.
4. Click the "Sign Up" button to create your admin account.
5. After successfully signing up, proceed to the login page.
6. Log in with your admin credentials.
7. Access the admin dashboard to manage restaurants and menus.

![image](https://github.com/aniketchauhan18/restaurant-management/assets/132349103/5a7492ee-7338-4d43-89fe-4c74a5eaf449)
![image](https://github.com/aniketchauhan18/restaurant-management/assets/132349103/4a18bf8a-dff2-48cb-9209-00ff4520204b)

### User Browsing

1 Navigate to the signup page. 2. Select "user" as the role. 3. Fill in the required information, including username, email, and password. 4. Click the "Sign Up" button to create your admin account. 5. After successfully signing up, proceed to the login page. 2. Browse through the list of restaurants. 3. View detailed menus of each restaurant.

## API Endpoints

### Authentication

- **POST /api/v1/user/register:** Register a new user/admin
- **POST /api/v1/user/login:** Log in a user/admin

### Restaurants

- **GET /api/v1/restaurants:** Get all restaurants
- **GET /api/v1/restaurants/:id** Get restaurant by restaurant id
- **GET /api/v1/restaurants/user/:id** Get all restaurants by user id
- **POST /api/v1/restaurants/register** Create a new restaurant (Admin only)
- **PATCH /api/v1/restaurants/update/:restaurantId** Update a restaurant (Admin only)
- **DELETE /api/v1/restaurants/delete/:restaurantId** Delete a restaurant (Admin only)

### Menus

- **GET /api/v1/menus/:restaurantId:** Get all menus for a restaurant
- **POST /api/v1/menus/register/:restaurantId:** Create a new menu item (Admin only)
- **PATCH /api/v1/menus/update/:menuId:** Update a menu item (Admin only)
- **DELETE /api/v1/menus/delete/:menuId:** Delete a menu item (Admin only)

## Backend deployed link

- https://restaurantapp-7atz.onrender.com
