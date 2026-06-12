const pool = require("../config/db");

const createBloodRequestTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blood_requests (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        blood_group VARCHAR(5) NOT NULL,
        units INTEGER NOT NULL,
        hospital VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Blood Requests Table Ready");
  } catch (err) {
    console.error(err);
  }
};

module.exports = createBloodRequestTable;