const db = require("../db/queryType");

async function typeGet(req, res) {
    const types = await db.getAllTypes();
    console.log("Types: ", types);
    res.render("types", {
        title: "Types",
        types: types
    })
  }

  module.exports = {
    typeGet
  };