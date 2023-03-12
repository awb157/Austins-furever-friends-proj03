const db = require('../config/connection');
const { User, Animals } = require('../models');
const catsSeeds = require('./catsSeeds.json');
const dogsSeeds = require('./dogsSeeds.json');


db.once('open', async () => {
  await User.deleteMany({});
  await Animals.deleteMany({});

  const dogs = await Animals.insertMany(dogsSeeds);
  const cats = await Animals.insertMany(catsSeeds);

  console.log('Animals seeded!');
  process.exit(0);
});
