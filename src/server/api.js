const fetch = require("node-fetch");
const { apiKey } = require("./config");

const API_HOST = "https://api.nasa.gov/mars-photos/api/v1";

const urls = {
  roverManifest: (rover) => `${API_HOST}/manifests/${rover}?api_key=${apiKey}`,
  roverPhoto: (rover, { sol }) =>
    `${API_HOST}/rovers/${rover}/photos?sol=${sol}&api_key=${apiKey}`,
};

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
        urls.roverManifest(rover)
      ).then((res) => res.json());

      res.send(photoManifest);
    } catch (err) {
      console.log("error: ", err);
    }
  });

  app.get("/mars-rover/:rover/photos", async (req, res) => {
    try {
      const {
        params: { rover },
        query: { sol },
      } = req;

      if (!rover || !sol) {
        res.status(422).end();
      }

      const { photos } = await fetch(urls.roverPhoto(rover, { sol })).then(
        (res) => res.json()
      );

      res.send({ photos });
    } catch (err) {
      console.log("error: ", err);
    }
  });
};
