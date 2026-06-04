const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      city,
      blood_group,
      role,
    } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !city ||
      !blood_group ||
      !role
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `
      INSERT INTO users
      (name,email,password,phone,city,blood_group,role)
      VALUES
      ($1,$2,$3,$4,$5,$6,$7)
      RETURNING id,name,email,phone,city,blood_group,role
      `,
      [
        name,
        email,
        hashedPassword,
        phone,
        city,
        blood_group,
        role,
      ]
    );

    const user = result.rows[0];

    res.status(201).json({
      user,
      token: generateToken(user.id),
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and Password are required",
      });
    }

    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        city: user.city,
        blood_group: user.blood_group,
        role: user.role,
      },
      token: generateToken(user.id),
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};