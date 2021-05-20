const API = {
  marsRover: (rover) =>
    `http://localhost:3000/mars-rover/${rover.toLowerCase()}`,
  marsRoverPhotos: (rover, sol) =>
    `http://localhost:3000/mars-rover/${rover.toLowerCase()}/photos?sol=${sol}`,
};

const fetchMarsRovers = async (state) =>
  Promise.all(
    state.get("rovers").map(async ({ name }) => {
      const {
        landing_date: landingDate,
        launch_date: launchDate,
        status,
        max_sol: maxSol,
        photos,
      } = await fetch(API.marsRover(name)).then((res) => res.json());

      const recentPhotos = (photos || []).filter(
        (photo) => photo.sol === maxSol
      );

      const { photos: maxSolPhotos } = await fetch(
        API.marsRoverPhotos(name, maxSol)
      ).then((res) => res.json());

      return {
        name,
        landingDate,
        launchDate,
        status,
        maxSol,
        recentPhotos: {
          meta: recentPhotos[0],
          photos: maxSolPhotos,
        },
      };
    })
  );

export default API;
export { fetchMarsRovers };
