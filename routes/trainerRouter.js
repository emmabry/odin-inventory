const { Router } = require("express");
const trainerController = require("../controllers/trainerController");
const trainerRouter = Router();

trainerRouter.get("/", trainerController.trainerGet);

module.exports = trainerRouter;