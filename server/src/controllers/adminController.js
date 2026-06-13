const pool = require("../config/db");

const getAdminStats = async (req, res) => {
  try {
    const totalRequests = await pool.query(
      "SELECT COUNT(*) FROM blood_requests"
    );

    const pendingRequests = await pool.query(
      "SELECT COUNT(*) FROM blood_requests WHERE status='pending'"
    );

    const approvedRequests = await pool.query(
      "SELECT COUNT(*) FROM blood_requests WHERE status='approved'"
    );

    const rejectedRequests = await pool.query(
      "SELECT COUNT(*) FROM blood_requests WHERE status='rejected'"
    );

    const totalUsers = await pool.query(
      "SELECT COUNT(*) FROM users"
    );

    res.json({
      totalRequests: totalRequests.rows[0].count,
      pendingRequests: pendingRequests.rows[0].count,
      approvedRequests: approvedRequests.rows[0].count,
      rejectedRequests: rejectedRequests.rows[0].count,
      totalUsers: totalUsers.rows[0].count,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAdminStats,
};