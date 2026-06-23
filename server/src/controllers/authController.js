const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const transporter = require("../utils/sendEmail");

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

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length === 0) {
      return res.status(404).json({
        message: "No account found with this email",
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const expiresAt = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await pool.query(
      `
      INSERT INTO password_resets
      (email, otp, expires_at)
      VALUES ($1, $2, $3)
      `,
      [email, otp, expiresAt]
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Blood Bank Password Reset OTP",
      html: `
        <h2>Password Reset Request</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP expires in 10 minutes.</p>
      `,
    });

    res.json({
      message: "OTP sent successfully",
    });

  } catch (error) {
  console.error("=================================");
  console.error("FORGOT PASSWORD ERROR");
  console.error(error);
  console.error("=================================");

  return res.status(500).json({
    message: error.message,
  });
}
};

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const result = await pool.query(
      `
      SELECT *
      FROM password_resets
      WHERE email = $1
      AND otp = $2
      ORDER BY id DESC
      LIMIT 1
      `,
      [email, otp]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    const reset = result.rows[0];

    if (new Date(reset.expires_at) < new Date()) {
      return res.status(400).json({
        message: "OTP Expired",
      });
    }

    res.json({
      message: "OTP Verified",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      `
      UPDATE users
      SET password = $1
      WHERE email = $2
      `,
      [hashedPassword, email]
    );

    await pool.query(
      `
      DELETE FROM password_resets
      WHERE email = $1
      `,
      [email]
    );

    res.json({
      message: "Password Updated Successfully",
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
  forgotPassword,
  verifyOtp,
  resetPassword,
};
