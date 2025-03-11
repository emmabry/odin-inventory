const pool = require("./pool");

async function getAllTypes() {
    const { rows } = await pool.query("SELECT * FROM type");
    return rows;
  }

module.exports = {
    getAllTypes
}