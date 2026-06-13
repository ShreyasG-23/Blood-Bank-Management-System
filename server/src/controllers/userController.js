const pool = require("../config/db");
const searchDonors = async (req, res) => {
  try {
    const { blood_group, city } = req.query;
    console.log("Query Params:", req.query);
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
    
    console.log("Results:", result.rows);
    res.json(result.rows);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  searchDonors,
};