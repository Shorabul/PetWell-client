# WarmPaws – Pet Care in Winter

A cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season. Users can explore local pet care services, winter pet clothing, grooming options, and expert tips — all in one friendly interface.

---

## 🔗 Live Demo
https://warmpaws-pet-care.netlify.app/

---

## 📝 Project Overview
WarmPaws is a **single-page application (SPA)** built with React that provides a seamless, winter-themed experience for pet owners. It features authentication, service listings, expert tips, and booking functionality — all with a modern, minimalist design and subtle animations.

---

## ⚡ Key Features
- **Responsive Design:** Works perfectly on mobile, tablet, and desktop.
- **Authentication:** Login, Signup, Google Social Login, Forgot Password.
- **Protected Routes:** Service details and booking only accessible when logged in.
- **Profile Management:** Users can view and update their profile (name & image).
- **Name Management:** Users can view and update their profile (name).
- **Winter Care Services:** Display popular services with images, price, rating, and details.
- **Service Booking Form:** Simple booking with success toast notification.
- **Extra Sections:**
  - Winter Care Tips for Pets
  - Meet Our Expert Vets
  - Popular Pet Products
- **Hosted:** Deployed on Netlify.

---

## 🛠 Technologies & Packages Used
- **React** – Frontend library for building UI.
- **React Router** – SPA routing.
- **Firebase** – Authentication and secure user data.
- **react-hot-toast** – Toast notifications for success/error.
- **Swiper.js** – Hero slider for winter-themed images.
- **Animate.css / React-Spring** – Subtle animations.
- **Tailwind CSS** – Modern, responsive styling.

---

## 📁 Project Structure
/src
/components
Footer.jsx
Hero.jsx
HeroSlider
Navbar.jsx
PopularServices.jsx
ProductCard.jsx
Products.jsx
ServiceCard.jsx
TipCard.jsx
Tips.jsx
VetCard.js
Vets.jsx
/firebase
firebase.config.js
/layouts
AuthLayout.jsx
MainLayout.jsx
/pages
BookServiceForm.jsx
Error.jsx
ForgotPassword.jsx
Home.jsx
Loading.jsx
Login.jsx
ProductDetils.jsx
Profile.jsx
ProfileTost.jsx
ServiceDetails.jsx
Services.jsx
Signup.jsx
UpdateEmail.jsx
UpdateName.jsx
UpdateNumber.jsx
UpdateProfile.jsx
/provider
AuthContext.jsx
AuthProvider.jsx
PrivateRoute.jsx
/routes
router.
/utility
nameUtils.jsx