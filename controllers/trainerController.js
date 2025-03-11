const db = require("../db/queryTrainer");

async function trainerGet(req, res) {
    const trainers = await db.getAllTrainers();
    console.log("Trainers: ", trainers);
    res.render("trainers", {
        title: "Trainers",
        trainers: trainers
    })
  }

async function trainerPokemonGet(req, res) {
    const id = req.params.id
    const pokemon = await db.getTrainerPokemon(id);
    const trainer = await db.getTrainerById(id);
    console.log("trainer:", trainer)
    console.log("Trainers pokemon: ", pokemon);
    res.render("trainer_poke", {
        title: "Trainers",
        trainer: trainer,
        pokemon: pokemon
    })
  }

module.exports = {
    trainerGet,
    trainerPokemonGet
  };