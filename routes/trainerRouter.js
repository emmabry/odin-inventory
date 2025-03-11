const { Router } = require("express");
const trainerController = require("../controllers/trainerController");
const trainerRouter = Router();

trainerRouter.get("/", trainerController.trainerGet);
trainerRouter.get("/:id", trainerController.trainerPokemonGet);

module.exports = trainerRouter;