const pool = require("../config/db");

const createBloodRequest = async (req, res) => {
  try {
    const {
      user_id,
      blood_group,
      units,
      hospital,
      city,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO blood_requests
      (user_id,blood_group,units,hospital,city)
      VALUES
      ($1,$2,$3,$4,$5)
      RETURNING *
      `,
      [
        user_id,
        blood_group,
        units,
        hospital,
        city,
      ]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createBloodRequest,
};