const pool = require("./pool");

async function getAllTrainers() {
  const { rows } = await pool.query(`SELECT * FROM trainer;`);
  return rows;
}

async function getTrainerPokemon(id) {
    const { rows } = await pool.query(`SELECT pokeid FROM trainer_pokemon WHERE trainerid = ${id}`)
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