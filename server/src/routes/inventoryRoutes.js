const express = require("express");
const router = express.Router();

const {
  getInventory,
  addUnits,
  removeUnits,
} = require("../controllers/inventoryController");

router.get("/", getInventory);

router.put("/:bloodGroup/add", addUnits);

router.put("/:bloodGroup/remove", removeUnits);

module.exports = router;