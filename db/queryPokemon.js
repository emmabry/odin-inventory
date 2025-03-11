const pool = require("./pool");

async function getAllPokemon() {
  const { rows } = await pool.query(`SELECT p.pokeid, p.name, p.img_url, STRING_AGG(t.typename, ', ') 
                    AS types FROM pokemon p
                    LEFT JOIN pokemon_types pt ON p.pokeid = pt.pokeid
                    LEFT JOIN type t ON pt.typeid = t.typeid
                    GROUP BY p.pokeid, p.name, p.img_url
                    ORDER BY p.pokeid;`);
  return rows;
}

async function getPokemonById(id) {
  const { rows } = await pool.query(`SELECT * FROM pokemon WHERE pokeid = ${id};`);
  return rows;
}


module.exports = {
    getAllPokemon,
    getPokemonById
}