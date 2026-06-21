const express = require("express");
const router = express.Router();

const {
  createBloodRequest,
  getBloodRequests,
  updateRequestStatus,
  getUserRequests,
} = require("../controllers/bloodRequestController");

router.post("/", createBloodRequest);
router.get("/", getBloodRequests);
router.put("/:id", updateRequestStatus);
router.get("/:userId", getUserRequests);

module.exports = router;