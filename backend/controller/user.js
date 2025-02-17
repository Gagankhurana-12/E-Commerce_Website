const express = require("express");
const path = require("path");
const fs = require("fs");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

router.post(
  "/create-user",
  upload.single("file"),
  catchAsyncErrors(async (req, res, next) => {
    console.log("Creating user...");
    const { name, email, password } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      return next(new ErrorHandler("All fields are required", 400));
    }

    // Check if user already exists
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      if (req.file) {
        const filepath = path.resolve(__dirname, "../uploads", req.file.filename);
        if (fs.existsSync(filepath)) {
          try {
            fs.unlinkSync(filepath);
          } catch (err) {
            console.error("Error removing file:", err);
            return res.status(500).json({ message: "Error removing file" });
          }
        }
      }
      return next(new ErrorHandler("User already exists", 400));
    }

    // Ensure file URL is set correctly
    let fileUrl = "";
    if (req.file && req.file.filename) {
      fileUrl = path.join("uploads", req.file.filename);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    console.log("At Create ", "Password: ", password, "Hash: ", hashedPassword);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      avatar: {
        public_id: req.file?.filename || "",
        url: fileUrl,
      },
    });

    console.log(user);
    res.status(201).json({ success: true, user });
  })
);

router.post(
  "/login",
  catchAsyncErrors(async (req, res, next) => {
    console.log("Logging in user...");
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please provide email and password", 400));
    }

    const user = await User.findOne({ email }, { password: 1 });

    console.log(user);
    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const isPasswordMatched = await bcrypt.compare(password.trim(), user.password);

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    user.password = undefined;
    console.log("Success");
    res.status(200).json({
      success: true,
      user,
    });
  })
);

module.exports = router;
