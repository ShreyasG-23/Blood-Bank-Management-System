const pool = require("../config/db");

const getInventory = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM blood_inventory ORDER BY blood_group"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const addUnits = async (req, res) => {
  try {
    const { bloodGroup } = req.params;
    const { units } = req.body;

    const result = await pool.query(
      `
      UPDATE blood_inventory
      SET units = units + $1
      WHERE blood_group = $2
      RETURNING *
      `,
      [units, bloodGroup]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const removeUnits = async (req, res) => {
  try {
    const { bloodGroup } = req.params;
    const { units } = req.body;

    const current = await pool.query(
      `
      SELECT *
      FROM blood_inventory
      WHERE blood_group = $1
      `,
      [bloodGroup]
    );

    if (current.rows[0].units < units) {
      return res.status(400).json({
        message: "Not enough units available",
      });
    }

    const result = await pool.query(
      `
      UPDATE blood_inventory
      SET units = units - $1
      WHERE blood_group = $2
      RETURNING *
      `,
      [units, bloodGroup]
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
  getInventory,
  addUnits,
  removeUnits,
};