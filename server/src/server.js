const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./config/db");
const createTables = require("./database/initDb");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

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

const PORT = process.env.PORT || 5000;

createTables();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});