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

const getBloodRequests = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM blood_requests
      WHERE status = 'pending'
      ORDER BY created_at DESC
    `);

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await pool.query(
      `
      UPDATE blood_requests
      SET status = $1
      WHERE id = $2
      RETURNING *
      `,
      [status, id]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getUserRequests = async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await pool.query(
      `
      SELECT *
      FROM blood_requests
      WHERE user_id = $1
      ORDER BY created_at DESC
      `,
      [userId]
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};



module.exports = {
  createBloodRequest,
  getBloodRequests,
  updateRequestStatus,
  getUserRequests,
};  