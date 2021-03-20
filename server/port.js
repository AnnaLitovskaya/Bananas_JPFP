const express = require('express');
const app = express();
const db = require('./db/db');
const syncAndSeed = require('./db/Seed');

const run = async () => {
  try {
    db.authenticate();
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`App running on port ${port}!`));
  } catch (ex) {
    console.log(ex);
  }
};

run();
