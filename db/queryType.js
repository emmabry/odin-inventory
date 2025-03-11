const pool = require("./pool");

async function getAllTypes() {
    const { rows } = await pool.query("SELECT * FROM type");
    return rows;
  }

async function getTypeById(typeid) {
  const { rows } = await pool.query(`SELECT * FROM type WHERE typeid = ${typeid} `);
  return rows;
}

async function getPokemonByType(typeid) {
    const { rows } = await pool.query(`
      SELECT pokemon.pokeid, pokemon.name, type.typename, img_url 
      FROM pokemon
      JOIN pokemon_types pt ON pokemon.pokeid = pt.pokeid
      JOIN type ON pt.typeid = type.typeid
      WHERE pt.typeid = ${typeid}
      `);
    return rows;

}

module.exports = {
    getAllTypes,
    getPokemonByType,
    getTypeById
}