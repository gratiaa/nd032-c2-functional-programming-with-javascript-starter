const path = require("path");

require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  env: process.env.ENV,
  apiKey: process.env.API_KEY,
  path: {
    public: path.join(__dirname, "../public"),
  },
};
