const express = require("express");
const {
  getUserProfile,
  updateProfileController,
} = require("../controllers/profile.controller.js");
const protectedRoute = require("../middleware/protectRoute.js");

const router = express.Router();

router.get("/:id", protectedRoute, getUserProfile);
router.put("/update/:id", protectedRoute, updateProfileController);

module.exports = router;
