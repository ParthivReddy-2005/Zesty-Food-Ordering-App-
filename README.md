# 🍔 Zesty Food Ordering App

A modern and responsive Food Ordering Web Application built using **React.js**. The application allows users to browse restaurants, view menus, add items to cart, and manage orders seamlessly with state management using Redux.

---

# Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Running the Project](#-running-the-project)
- [Application Flow](#-application-flow)
- [Redux Store Management](#-redux-store-management)
- [Custom Hooks](#-custom-hooks)
- [Components](#-components)
- [Learning Outcomes](#-learning-outcomes)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

# Project Overview

The **Zesty Food Ordering App** is a React-based food delivery application designed to provide users with a smooth and interactive online food ordering experience. Users can explore restaurants, check restaurant menus, add food items to the cart, and manage their orders efficiently.

The project demonstrates the use of:

- React Functional Components
- React Hooks
- Redux Toolkit
- Custom Hooks
- Component-Based Architecture
- Dynamic Routing
- State Management

---

# Features

- Browse Restaurants
- View Restaurant Menus  
- Add & Remove Cart Items  
- Redux Toolkit State Management  
- Responsive UI  
- Shimmer Loading Effect  
- Online/Offline Status Detection  
- Reusable Components  
- Custom React Hooks  
- Dynamic Restaurant Pages  

---

# Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Library |
| Redux Toolkit | State Management |
| JavaScript | Application Logic |
| HTML5 | Structure |
| CSS3 | Styling |
| Parcel | Bundler |
| React Router DOM | Routing |

---

# Project Structure

```bash
src/
│
├── components/
│   ├── About.js
│   ├── Body.js
│   ├── Cart.js
│   ├── Contact.js
│   ├── Error.js
│   ├── Grocery.js
│   ├── Header.js
│   ├── ItemData.js
│   ├── RestaurantCard.js
│   ├── RestaurantCategory.js
│   ├── RestaurantMenu.js
│   ├── Shimmer.js
│   ├── User.js
│   └── Userclass.js
│
├── utils/
│   ├── appStore.js
│   ├── cartSlice.js
│   ├── constants.js
│   ├── useOnlineStatus.js
│   ├── useRestaurantMenu.js
│   └── userContext.js
│
├── app.js
│
├── index.css
├── index.html
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1 - Clone the Repository

```bash
git clone https://github.com/your-username/zesty-food-ordering-app.git
```

---

## 2 - Navigate to Project Directory

```bash
cd zesty-food-ordering-app
```

---

## 3 - Install Dependencies

```bash
npm install
```

---

# Running the Project

## Start Development Server

```bash
npm start
```

OR

```bash
npm run dev
```

---

# Application Flow

1. User visits the homepage
2. Restaurant data is fetched dynamically
3. User selects a restaurant
4. Restaurant menu is displayed
5. Food items can be added to the cart
6. Redux manages cart state globally
7. User can view and manage cart items

---

# Redux Store Management

The application uses **Redux Toolkit** for centralized state management.

## Store Files

| File | Purpose |
|------|---------|
| `appStore.js` | Configures Redux Store |
| `cartSlice.js` | Handles Cart State |

### Features of Redux Store

- Add Items to Cart
- Remove Items from Cart
- Clear Cart
- Global State Access

---

# Custom Hooks

## `useOnlineStatus.js`

Detects whether the user is online or offline.

## `useRestaurantMenu.js`

Fetches restaurant menu data dynamically.

---

# Components

| Component | Purpose |
|-----------|---------|
| Header.js | Navigation Bar |
| Body.js | Homepage Content |
| RestaurantCard.js | Restaurant Card UI |
| RestaurantMenu.js | Displays Restaurant Menu |
| RestaurantCategory.js | Menu Categories |
| Cart.js | Shopping Cart |
| Shimmer.js | Loading Skeleton UI |
| About.js | About Page |
| Contact.js | Contact Page |
| Error.js | Error Handling Page |

---

# Learning Outcomes

This project helps in understanding:

- React Component Architecture
- React Hooks
- Redux Toolkit
- State Management
- Routing in React
- Custom Hooks
- API Data Fetching
- Responsive UI Design
- Dynamic Rendering

---

# Future Enhancements

- User Authentication
- Payment Gateway Integration
- Order History
- Search & Filter Restaurants
- Dark Mode
- Real-Time Order Tracking
- Backend Integration

---

# Contributing

Contributions are welcome!

## Steps to Contribute

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

### Parthiv Reddy

GitHub: https://github.com/ParthivReddy-2005

LinkedIn: https://www.linkedin.com/in/pelluru-parthiv-reddy-3b472a274/

Email: parthivreddy.pelluru2005@gmail.com
