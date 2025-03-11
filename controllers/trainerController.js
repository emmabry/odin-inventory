const db = require("../db/queryTrainer");

async function trainerGet(req, res) {
    const trainers = await db.getAllTrainers();
    console.log("Trainers: ", trainers);
    res.render("trainers", {
        title: "Trainers",
        trainers: trainers
    })
  }

  module.exports = {
    trainerGet
  };