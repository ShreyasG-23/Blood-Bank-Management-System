const express = require("express");
const router = express.Router();

const {
  createBloodRequest,
  getBloodRequests,
  updateRequestStatus,
} = require("../controllers/bloodRequestController");

router.post("/", createBloodRequest);
router.get("/", getBloodRequests);
router.put("/:id", updateRequestStatus);

module.exports = router;