const { Router } = require("express");
const typeController = require("../controllers/typeController");
const typeRouter = Router();

typeRouter.get("/", typeController.typeGet);

module.exports = typeRouter;