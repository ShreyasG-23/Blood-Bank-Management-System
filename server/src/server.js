const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./config/db");
const createTables = require("./database/initDb");
const authRoutes = require("./routes/authRoutes");
const bloodRequestRoutes = require("./routes/bloodRequestRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/blood-requests",bloodRequestRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/inventory", inventoryRoutes);
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      message: "Database Connected",
      time: result.rows[0].now,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

app.get("/test-reset-table", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM password_resets"
  );

  res.json(result.rows);
});

const PORT = process.env.PORT || 5000;

createTables();
app.get("/inventory-test", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM blood_inventory ORDER BY blood_group"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});