import ImageGallery from "./ImageGallery.js";

const Rovers = (state) => {
  const { rovers } = state;

  return `${rovers
    .map((rover) => {
      const { name, launchDate, landingDate, status, recentPhotos } = rover;

      return `
      <details class="rover">
        <summary id="${name}_details_summary">
          <dl class="rover_card p-4">
            <dd class="text-xs text-gray-400 font-light">Name</dd>
            <dt class="text-lg pb-2">${name}</dt>
            <dd class="text-xs text-gray-400 font-light">Launch Date</dd>
            <dt class="text-lg pb-2">${launchDate}</dt>
            <dd class="text-xs text-gray-400 font-light">Landing Date</dd>
            <dt class="text-lg pb-2">${landingDate}</dt>
            <dd class="text-xs text-gray-400 font-light">Status</dd>
            <dt class="text-lg pb-2">${status.toUpperCase()}</dt>
          </dl>
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
