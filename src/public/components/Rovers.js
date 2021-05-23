import RoverSummary from "./RoverSummary.js";
import ImageGallery from "./ImageGallery.js";

const Rovers = (state) => {
  const { rovers } = state;

  return `${rovers
    .map((rover) => {
      const { name, launchDate, landingDate, status, recentPhotos } = rover;

      return `
      <details class="rover">
        <summary id="${name}_details_summary">
          ${RoverSummary({
            name,
            launchDate,
            landingDate,
            status,
          })}
        </summary>
        <div class="gallery">
          <h2 class="text-3xl font-bold pb-3">${name} Gallery</h2>
          <h3>Total: ${recentPhotos.meta.total_photos}</h3>
          <button id="${name}_details_close" class="btn_gallery_close" type="button">Close</button>
          <ul class="list">
            ${ImageGallery(recentPhotos)}
          </ul>
        </div>
      </details>
  `;
    })
    .join("")}`;
};

export default Rovers;
