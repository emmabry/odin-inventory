const { Router } = require("express");
const pokemonController = require("../controllers/pokemonController");
const pokemonRouter = Router();

pokemonRouter.get("/", pokemonController.pokemonGet);

module.exports = pokemonRouter;