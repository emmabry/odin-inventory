const express = require("express");
const app = express();
const pokemonRouter = require("./routes/pokemonRouter");
const typeRouter = require("./routes/typeRouter");
const trainerRouter = require("./routes/trainerRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", pokemonRouter);
app.use("/type/", typeRouter)
app.use("/trainer/", trainerRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));