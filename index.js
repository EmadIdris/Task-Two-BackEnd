const { start } = require("./src/server");
const { db } = require("./src/models/index");

db.sync()
  .then(async () => {
    await db.authenticate();
    console.log("Database connected successfully....");

    start();
  })
  .catch((e) => console.log(e));
