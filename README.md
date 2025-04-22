---

# Follow Along E-Commerce Website

## Key Features

### 1. REST API
- Implements RESTful principles for efficient client-server communication.
- Endpoints for managing products, users, and orders.

### 2. MERN Stack
- Built with MongoDB, Express.js, React, and Node.js.
- Ensures scalability, performance, and a seamless full-stack experience.

### 3. Order Handling
- Streamlined order processing from cart to checkout.
- Real-time updates for order status and inventory management.

### 4. Product Listing & Management
- Features for adding, editing, and removing products.
- Search and filter functionality for an optimized user experience.

### 5. User Authentication
- Secure authentication with JWT.
- Role-based access control for users and admins.

---

## Milestone 2 Progress 🚀

### ✅ Project Setup
- Structured the project with separate frontend and backend directories.
- Initialized a React app for the frontend and a Node.js server for the backend.

### ✅ Tooling & Configuration
- Configured Tailwind CSS for modern and responsive styling.
- Added useful extensions to improve development efficiency.

### ✅ Login Page Implementation
- Designed and developed a fully functional Login Page.
- Ensured proper UI styling using Tailwind CSS.
- Set up basic authentication logic to handle user login.

This milestone laid the groundwork for the E-Commerce application by setting up the project structure and implementing the first user-facing feature.

---

## Milestone 3 Progress 🚀

### ✅ Backend Folder Structure
- Organized backend code with separate folders for routes, controllers, models, and middleware.
- Introduced `utils` and `middlewares` directories for better modularity.

### ✅ Server Setup
- Created a backend server using Node.js and Express.
- Configured the server to listen on a designated port.

### ✅ Database Connection
- Integrated MongoDB to store and manage data.
- Verified successful connection between the server and MongoDB.

### ✅ Error Handling
- Implemented a global error handler for better debugging.
- Provided meaningful error messages for invalid requests and failed operations.

### ✅ README Update
- Documented Milestone 3 progress in this README file.

This milestone focused on setting up a solid backend infrastructure to support the application’s growth and data management.

---

## Milestone 4: Creating User Model and Controller 🚀

In **Milestone 4**, we expanded our backend by introducing **User Models**, **Controllers**, and **File Uploads**.

### ✅ **User Model Implementation**
- Defined a **User Schema** using Mongoose to store user details (name, email, password, etc.).
- Implemented necessary **validations** to ensure data integrity.
- Integrated **bcrypt** for secure password hashing.

### ✅ **User Controller Setup**
- Developed controller functions to:
  - **Create new users**
  - **Retrieve user details**
  - **Update user information**
  - **Delete users** if necessary
- Handled error responses for **invalid or duplicate user entries**.

### ✅ **Multer File Upload Integration**
- Configured **Multer** to handle file uploads (e.g., profile pictures).
- Implemented logic to **store and retrieve uploaded images**.
- Ensured file validation to prevent invalid file types from being uploaded.

### ✅ **Project Submission**
- Pushed the updated code to GitHub.
- Updated the README with Milestone 4 details.

This milestone strengthened the **user management** aspect of our application, making it more robust and scalable for future enhancements.

---

## Milestone 5: Creating the Signup Page 🚀

In **Milestone 5**, we focused on building the frontend Sign-Up page and implementing client-side form validation.

### ✅ **Sign-Up Page UI Development**
- Created the user interface for the Sign-Up page using HTML and CSS (likely with Tailwind CSS).
- Included fields for name, email, and password.
- Designed the page to be user-friendly and visually appealing.

### ✅ **Form Validation**
- Implemented client-side form validation to ensure data quality.
- Validated email format, password strength (e.g., minimum length), and other necessary fields.
- Provided user-friendly error messages for invalid inputs.

### ✅ **README Update**
- Documented Milestone 5 progress in this README file.

This milestone focused on creating the user registration interface and ensuring that the data entered by the user is valid before being sent to the backend.  This improves user experience and reduces the load on the server.

---

## Milestone 6: Backend Signup Endpoint and Password Encryption 🚀

In **Milestone 6**, we implemented the backend endpoint to handle user signup and securely store user data, including encrypting passwords.

### ✅ **Signup Endpoint Implementation**
- Created a new route and controller function to handle POST requests to the signup endpoint.
- Received user data from the frontend signup form.

### ✅ **Password Encryption**
- Used `bcrypt` to hash the user's password before storing it in the database.
- Ensured that passwords are never stored in plain text.

### ✅ **User Data Storage**
- Stored the complete user data (name, email, hashed password, etc.) in the MongoDB database.
- Implemented error handling for duplicate entries and other potential issues.

### ✅ **README Update**
- Documented Milestone 6 progress in this README file.

This milestone focused on securely handling user registration on the backend, including the crucial step of password encryption.  This is essential for protecting user data and maintaining security best practices.

# Milestone 7 - Login Endpoint

## Overview
This milestone involves creating a login endpoint that allows users to authenticate using their email/username and password.

## Steps

### 1. Create Login Endpoint
- Accept user credentials (email/username and password).
- Retrieve the corresponding user from the database.

### 2. Validate Password
- Use bcrypt to hash the entered password.
- Compare it with the stored hashed password for authentication.

## Technologies Used
- Node.js / Express (or relevant backend framework)
- bcrypt for password hashing
- Database (MongoDB, PostgreSQL, etc.)

## Installation & Setup
1. Clone the repository:
   sh
   git clone <repository_url>
   
2. Install dependencies:
   sh
   npm install
   
3. Run the application:
   sh
   npm start
   

## API Endpoint
### Login
*POST* /api/login
#### Request Body
json
{
  "email": "user@example.com",
  "password": "yourpassword"
}

#### Response
json
{
  "message": "Login successful",
  "token": "your-jwt-token"
}


## License
This project is licensed under the MIT License.

Milestone 8: Product Card Component and Homepage Layout 🚀
✅ Frontend Product Card Component
Designed and implemented a reusable Product Card component.
Utilized props to dynamically render product details like name, image, and price.
✅ Homepage Layout for Products
Created a responsive homepage to display multiple Product Cards.
Used Grid/Flexbox for optimal layout and user experience.

Milestone 9: Product Input Form 🚀
✅ Product Form Implementation
Designed a form for adding product details such as name, price, and description.
Implemented an option for uploading multiple product images.
✅ Database Integration
Structured the form to send product data to the backend for storage in MongoDB.
Ensured proper validation and error handling.
✅ README Update
Documented Milestone 9 progress in this README file.
This milestone focused on enabling product input, which is essential for expanding the e-commerce platform by allowing users to add new products dynamically.

Milestone 10: Product Schema and API Endpoint 🚀
✅ Product Schema Implementation
Defined a Product Schema in Mongoose.
Implemented validation for fields like name, price, and image URL.
✅ API Endpoint for Adding Products
Created a POST endpoint to store product details in MongoDB.
Ensured proper validation before saving the data.

Milestone 11: Dynamic Product Display 🚀
✅ Fetching Product Data
Created an endpoint to retrieve all stored products from MongoDB.
Implemented API call logic in the frontend to fetch data dynamically.
✅ Displaying Products
Passed fetched product data to the Product Card component.
Rendered product information dynamically on the homepage.

Milestone 12: My Products Page 🚀
✅ Filtering Products by User Email
Created a backend endpoint to retrieve products associated with the logged-in user's email.
Queried the MongoDB database to fetch only those products matching the user's email.
✅ Fetching Data on the Frontend
Implemented an API call to request user-specific product data from the backend.
Stored the retrieved data in the application state for dynamic rendering.
✅ Displaying User's Products
Passed the fetched data to the Product Card component.
Rendered the products dynamically on the "My Products" page.

Milestone 13: Editing Uploaded Products 🚀
✅ Backend Update Endpoint
Created an endpoint to receive and update product details in MongoDB.
Implemented logic to find the product by its ID and modify the existing data.
✅ Frontend Edit Button
Added an Edit button to each product card.
When clicked, it fetches the product details and auto-fills the form.
✅ Updating Product Data
Allowed users to modify product details directly within the form.
Implemented a Save Changes feature to update product details in the database.

Milestone 14: Deleting Products 🚀
✅ Backend Delete Endpoint
Created an endpoint to delete a product by its ID from MongoDB.
Implemented logic to find the product and remove it from the database.
✅ Frontend Delete Button
Added a Delete button to each product card.
When clicked, it sends the product ID to the server endpoint for deletion.
✅ Updating UI After Deletion
Ensured the product is removed from the frontend dynamically after successful deletion.
Implemented confirmation prompts before deletion for better user experience.

Milestone 15: Navbar Component 🚀
✅ Creating the Navbar Component

Designed a Nav component with links to key pages:
Home
My Products
Add Product
Cart
✅ Making the Navbar Responsive

Ensured the Navbar adapts to all screen sizes.
Implemented a mobile-friendly design with a collapsible menu.
✅ Reusing the Navbar Across Pages

Added the Nav component to all application pages.
Ensured smooth and intuitive navigation between different sections.

Milestone 16: Product Info Page 🚀
✅ Creating the Product Info Page

Designed a Product Info page to display detailed product information.
✅ Adding Quantity Selection and Cart Button

Implemented a Quantity Selector to allow users to choose the desired quantity.
Added an Add to Cart button to facilitate easy product purchase.
✅ Dynamic Data Rendering

Integrated backend API calls to fetch and display product details dynamically.
Ensured the page updates based on the selected product.

Milestone 17: Adding Products to Cart
✅ Updating User Schema
Modified the User Schema to include a cart field for storing added products.
✅ Cart Schema Implementation
Created a Cart Schema in Mongoose to store cart product details.
✅ Backend Cart Endpoint
Developed an API endpoint to receive product details and store them in the cart collection in MongoDB.
✅ API Integration
Ensured that product details are properly received from the frontend and stored in the cart.
✅ Testing and Validation
Implemented input validation to ensure correct product details are stored.
Tested API responses to confirm successful cart storage.

Milestone 18: Fetching Cart Products
✅ Backend Cart Retrieval Endpoint
Created an endpoint to fetch all products inside a user's cart.
✅ User-Based Filtering
Implemented logic to retrieve cart products based on the logged-in user's email.
✅ API Integration with Frontend
Integrated the frontend cart page with the backend to fetch and display cart items.
✅ Testing and Validation
Ensured that the cart data retrieval process is working correctly.
Tested API responses for accuracy and efficiency.

Milestone 19: Cart Page UI & Quantity Management
✅ Frontend Cart Page
Created a dedicated Cart Page UI to display products inside the cart.
Integrated the frontend with the backend endpoint from Milestone 18 to fetch cart items.
✅ Quantity Management
Implemented + (increase) and - (decrease) buttons for each cart product.
Users can modify product quantities dynamically.
✅ Backend Endpoints for Quantity Update
Created API endpoints to handle incrementing and decrementing the product quantity inside the cart.
Integrated these endpoints with the frontend.
✅ Testing and Validation
Ensured smooth UI interaction for increasing and decreasing quantities.
Tested API responses to validate quantity updates.

Milestone 20: User Profile Page 🚀
✅ Backend & API Integration

Created an endpoint to send user profile data (photo, name, email, and address).
Implemented authentication and error handling for secure access.
Integrated the frontend to fetch and display user details dynamically.
✅ Frontend Profile Page

Designed a Profile Page displaying profile photo, name, and email.
Added an Address Section with an "Add Address" button.
Displayed "No address found" if no address is available.
Ensured smooth UI updates when adding an address. 🚀

Milestone 21: Address Form Page 🏠
✅ Address Form Implementation

Created an Address Form Page with input fields for address, city, state, and ZIP code.
Used useState to manage the address input dynamically.
✅ Navigation & Integration

Added an "Add Address" button in the Profile Page.
Configured routing to navigate from Profile Page to Address Form Page.
Updated App.jsx to include the new route.

Milestone 22: Address API Integration 🌐
✅ Backend Endpoint Implementation

Created an API endpoint to receive the address from the frontend.

Validated and stored the address in the address array inside the user collection. ✅ Database Integration

Updated the user schema to ensure multiple addresses can be stored.

Implemented authentication and error handling for secure address updates.

Milestone 23: Address Selection for Orders 🛒
✅ Cart Page Enhancement

Added a "Place Order" button inside the cart page.
Navigated to the "Select Address" page when clicked.
✅ Address Selection Page

Displayed all available addresses of the user.
Provided an option to select one address for the order.
✅ Backend API Implementation

Created an endpoint to fetch and send all saved addresses of the user.
Ensured authentication and proper error handling. 

Milestone 24: Order Summary Page 🛍️
✅ Display Ordered Products

Listed all products the user is ordering.
✅ Address Confirmation

Displayed the selected delivery address.
✅ Cart Value Calculation

Showed the total value of the cart.
✅ Place Order Button

Added a "Place Order" button at the bottom for final confirmation.


Milestone 25: Order Processing Backend ⚙️
✅ Order API Implementation

Created an endpoint to receive products, user, and address details.
Retrieved the _id of the user using their email.
✅ Order Storage

Stored each product as a separate order with the same address.
Used the existing Order schema to save order details in MongoDB.

Milestone 26: Fetch User Orders API 📦
✅ Order Retrieval Endpoint

Created an endpoint to receive the user’s email.
Retrieved the _id of the user using their email.
✅ Fetch & Response

Used the _id to fetch all orders of the user from the database.
Sent all user orders in the API response.


Milestone 27: My Orders Page 🛍️
✅ My Orders Page

Created a "My Orders" page to display all user orders.
✅ API Integration

Sent a GET request to the my-orders endpoint.
Passed the user's email to fetch all orders.
✅ UI & Navigation

Displayed all user orders on the page.
Added "My Orders" to the navbar for easy access.

Milestone 28: Order Cancellation Feature
✅ My Orders Page

Added a Cancel Order button for active orders.
Hidden the button for canceled orders.
✅ API Implementation

Created an endpoint to cancel orders.
Updated order status to canceled in the database.
✅ UI Integration

Sent API request on button click.
Updated UI after successful cancellation.


Milestone 29: PayPal Integration for Online Payments 💳
✅ PayPal Developer Setup

Created a PayPal Developer account.
Accessed the PayPal Developer Dashboard.
Created a Sandbox account for testing transactions.
Copied and saved the Sandbox UserID for future reference.
Retrieved and stored the Client ID from the Sandbox account.
✅ Payment Options on Order Confirmation Page

Added two payment options: Cash on Delivery (COD) and Online Payment.
Implemented radio buttons to allow users to select their preferred payment method.
When "Online Payment" is selected, PayPal buttons will be displayed dynamically.


Milestone 30: PayPal Integration 💳
✅ PayPal Account Setup

Created a PayPal Developer account and a Sandbox account.
Retrieved and stored the Client ID.
✅ Implementation

Installed react-paypal-js.
Used PayPalScriptProvider to integrate PayPal payment options.
✅ Testing

Verified transactions using the Sandbox environment.
