const app = require('./server');
const db = require('./db/db');
const syncAndSeed = require('./db/seed');

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

module.exports = app;
