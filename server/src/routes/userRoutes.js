const express = require("express");
const router = express.Router();

const {
  searchDonors,
} = require("../controllers/userController");

router.get("/search", searchDonors);

module.exports = router;