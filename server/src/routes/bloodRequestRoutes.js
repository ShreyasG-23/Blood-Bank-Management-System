const express = require("express");
const router = express.Router();

const {
  createBloodRequest,
} = require("../controllers/bloodRequestController");

router.post("/", createBloodRequest);

module.exports = router;