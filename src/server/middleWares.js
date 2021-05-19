const express = require("express");

const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const { path, env } = require("./config");

const connectLiveReload = (app) => {
  const liveReloadServer = livereload.createServer();

  app.use(connectLivereload());

  liveReloadServer.watch(path.public);
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
};

module.exports = (app) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  if (env === "dev") {
    connectLiveReload(app);
  }
};
