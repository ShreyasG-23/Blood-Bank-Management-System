const pool = require("../config/db");

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await pool.query(
      "SELECT COUNT(*) FROM users"
    );

    const totalDonors = await pool.query(
      "SELECT COUNT(*) FROM users WHERE role='donor'"
    );

    const pendingRequests = await pool.query(
      "SELECT COUNT(*) FROM blood_requests WHERE status='pending'"
    );

    const approvedRequests = await pool.query(
      "SELECT COUNT(*) FROM blood_requests WHERE status='approved'"
    );

    const totalBloodUnits = await pool.query(
      "SELECT COALESCE(SUM(units),0) FROM blood_inventory"
    );

    res.json({
      totalUsers: Number(totalUsers.rows[0].count),
      totalDonors: Number(totalDonors.rows[0].count),
      pendingRequests: Number(pendingRequests.rows[0].count),
      approvedRequests: Number(approvedRequests.rows[0].count),
      totalBloodUnits: Number(totalBloodUnits.rows[0].coalesce),
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getDashboardStats,
};