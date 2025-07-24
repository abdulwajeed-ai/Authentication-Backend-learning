const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username,
    password
  });
  res.status(201).json({
    message: "user registerd successfully",
    user,
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({
    username,  
  });

  if (!user) {
    return res.status(401).json({
      message: "user account not found [invalid username]...",
    });
  }

  const isPasswordValid = password == user.password;
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid Password" });
  }
  res.status(200).json({
    message: "user loggedIn Successfully",
  });
});

module.exports = router;
