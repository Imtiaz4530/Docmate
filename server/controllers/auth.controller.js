const bcrypt = require("bcrypt");

const User = require("../models/usermodel.js");
const generateTokenAndSetCookie = require("../utils/generateToken.js");

const registerController = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      password,
      confirmPassword,
      role,
      gender,
      dateOfBirth,
      phone,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password doesn't match." });
    }

    const user = await User.findOne({ email });
    const usernameMatch = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exist." });
    }
    if (usernameMatch) {
      return res.status(400).json({ error: "Change your username!" });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //Generating Profile Picture
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      name,
      username,
      email,
      password: hashPassword,
      phone,
      role,
      gender,
      dateOfBirth,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        phone: newUser.phone,
        gender: newUser.gender,
        dateOfBirth: newUser.dateOfBirth,
        profilePic: newUser.profilePic,
      });
    }
  } catch (e) {
    console.log("Error In Signup Controller ---> ", e.message);
    res.status(500).json({ error: "Internal server error!" });
  }
};

const loginController = async (req, res) => {
  try {
  } catch (e) {
    console.log("Error In login Controller ---> ", e.message);
    res.status(500).json({ error: "Internal server error!" });
  }
};

module.exports = {
  registerController,
  loginController,
};
