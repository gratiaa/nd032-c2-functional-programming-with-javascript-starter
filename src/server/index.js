const express = require("express");

const { port, path } = require("./config");

const setupAPI = require("./api");
const setupMiddleWares = require("./middleWares");

const startServer = () => {
  const app = express();

  setupMiddleWares(app);

  app.use("/", express.static(path.public));

  setupAPI(app);

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

startServer();
