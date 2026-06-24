const pool = require("../config/db");

const createInventoryTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blood_inventory (
        id SERIAL PRIMARY KEY,
        blood_group VARCHAR(5) UNIQUE NOT NULL,
        units INTEGER DEFAULT 0
      );
    `);
    await pool.query(`
        INSERT INTO blood_inventory (blood_group, units)
        VALUES
        ('A+',0),
        ('A-',0),
        ('B+',0),
        ('B-',0),
        ('AB+',0),
        ('AB-',0),
        ('O+',0),
        ('O-',0)
        ON CONFLICT (blood_group) DO NOTHING;
    `);

    console.log("Blood Inventory Table Ready");
  } catch (err) {
    console.error(err);
  }
};

module.exports = createInventoryTable;