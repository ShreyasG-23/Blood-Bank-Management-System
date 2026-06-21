const pool = require("../config/db");
const createBloodRequestTable = require("./createBloodRequestTable");
const createPasswordResetTable = require("./createPasswordResetTable");

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        city VARCHAR(100),
        blood_group VARCHAR(5),
        role VARCHAR(20) DEFAULT 'receiver',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Users table created successfully");

    await createBloodRequestTable();
    await createPasswordResetTable();
    

  } catch (err) {
    console.error(err);
  }
};

module.exports = createTables;