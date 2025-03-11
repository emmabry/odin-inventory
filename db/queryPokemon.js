const pool = require("./pool");

async function getAllPokemon() {
    const { rows } = await pool.query("SELECT * FROM pokemon");
    return rows;
  }

module.exports = {
    getAllPokemon
}