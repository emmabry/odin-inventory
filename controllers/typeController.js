const db = require("../db/queryType");

async function typeGet(req, res) {
    const types = await db.getAllTypes();
    console.log("Types: ", types);
    res.render("types", {
        title: "Types",
        types: types
    })
  }

async function typePokemonGet(req, res) {
    const typeid = req.params.typeid
    const type = await db.getTypeById(typeid)
    const pokemon = await db.getPokemonByType(typeid)
    console.log("Type:", type)
    console.log("Types pokemon: ", pokemon);
    res.render("type_poke", {
        title: type.typename,
        type: type,
        pokemon: pokemon
    })

}

module.exports = {
    typeGet,
    typePokemonGet
  };