const { Client } = require("pg");
require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS pokemon (
  pokeid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  img_url VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS type (
  typeid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  typename VARCHAR(50) UNIQUE
);

CREATE TABLE IF NOT EXISTS pokemon_types (
  pokeid INTEGER REFERENCES pokemon(pokeid) ON DELETE CASCADE,
  typeid INTEGER REFERENCES type(typeid) ON DELETE CASCADE,
  PRIMARY KEY (pokeid, typeid)
);

CREATE TABLE IF NOT EXISTS trainer (
  trainerid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  trainername VARCHAR(50) UNIQUE
);

CREATE TABLE IF NOT EXISTS trainer_pokemon (
  trainerid INTEGER REFERENCES trainer(trainerid) ON DELETE CASCADE,
  pokeid INTEGER REFERENCES pokemon(pokeid) ON DELETE CASCADE,
  PRIMARY KEY (trainerid, pokeid)
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USERNAME}:~${process.env.PASSWORD}@localhost:5432/pokemon_data`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
