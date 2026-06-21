const pool = require("../config/db");

const searchDonors = async (req, res) => {
  try {
    const { blood_group, city } = req.query;

    const result = await pool.query(
      `
      SELECT id, name, email, phone, city, blood_group
      FROM users
      WHERE role = 'donor'
      AND blood_group = $1
      AND city ILIKE $2
      `,
      [blood_group, `%${city}%`]
    );

    res.json(result.rows);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      phone,
      city,
      blood_group,
    } = req.body;

    const result = await pool.query(
      `
      UPDATE users
      SET
      name = $1,
      phone = $2,
      city = $3,
      blood_group = $4
      WHERE id = $5
      RETURNING *
      `,
      [
        name,
        phone,
        city,
        blood_group,
        id,
      ]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  searchDonors,
  updateProfile,
};