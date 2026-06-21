const pool = require("../config/db");

const createPasswordResetTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS password_resets (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        otp VARCHAR(10) NOT NULL,
        expires_at TIMESTAMP NOT NULL
      );
    `);

    console.log("Password Reset Table Ready");
  } catch (err) {
    console.error(err);
  }
};

module.exports = createPasswordResetTable;