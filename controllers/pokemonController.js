const db = require("../db/queryPokemon");

async function pokemonGet(req, res) {
    const pokemon = await db.getAllPokemon();
    console.log("Pokemon: ", pokemon);
    res.render("index", {
        title: "Pokedex",
        pokemon: pokemon
    })
  }

  module.exports = {
    pokemonGet
  };