const fetch = require("node-fetch");
const { apiKey } = require("./config");

module.exports = (app) => {
  app.get("/mars-rover/:rover", async (req, res) => {
    try {
      const {
        params: { rover },
      } = req;

      if (!rover) {
        res.status(422).end();
      }

      const { photo_manifest: photoManifest } = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${apiKey}`
      ).then((res) => res.json());

      res.send(photoManifest);
    } catch (err) {
      console.log("error: ", err);
    }
  });
};
