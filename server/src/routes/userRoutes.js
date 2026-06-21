const express = require("express");
const router = express.Router();

const {
  searchDonors,
  updateProfile,
} = require("../controllers/userController");

router.get("/search", searchDonors);

router.put("/:id", updateProfile);

module.exports = router;