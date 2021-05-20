const path = require("path");

require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  apiKey: process.env.API_KEY,
  path: {
    public: path.join(__dirname, "../public"),
  },
};
