const pool = require("./pool");

async function getAllTrainers() {
  const { rows } = await pool.query(`SELECT * FROM trainer;`);
  return rows;
}

async function getTrainerPokemon(id) {
    const { rows } = await pool.query(`SELECT pokemon.pokeid, name, img_url, STRING_AGG(type.typename, ', ') AS types 
        FROM trainer_pokemon tp
        JOIN pokemon ON pokemon.pokeid = tp.pokeid
        LEFT JOIN pokemon_types pt on pt.pokeid = pokemon.pokeid
        LEFT JOIN type ON pt.typeid = type.typeid
        WHERE trainerid = ${id}
        GROUP BY pokemon.pokeid, pokemon.name, pokemon.img_url`)
    return rows
}

async function getTrainerById(id) {
    const { rows } = await pool.query(`SELECT * FROM trainer WHERE trainerid = ${id}`)
    return rows
}

module.exports = {
    getAllTrainers,
    getTrainerPokemon,
    getTrainerById
}