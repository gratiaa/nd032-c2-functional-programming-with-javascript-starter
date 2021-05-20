const Rovers = (state) => {
  const { rovers } = state;

  return `${rovers
    .map((rover) => {
      const { name, launchDate, landingDate, status, recentPhotos } = rover;

      // TODO: fetch & display recentPhotos
      console.log(recentPhotos);

      return `
      <a href="#" class="rover_card flex flex-col p-4 pr-10">
        <dl>
          <dd class="text-xs text-gray-400 font-light">Name</dd>
          <dt class="text-lg pb-2">${name}</dt>
          <dd class="text-xs text-gray-400 font-light">Launch Date</dd>
          <dt class="text-lg pb-2">${launchDate}</dt>
          <dd class="text-xs text-gray-400 font-light">Landing Date</dd>
          <dt class="text-lg pb-2">${landingDate}</dt>
          <dd class="text-xs text-gray-400 font-light">Status</dd>
          <dt class="text-lg pb-2">${status.toUpperCase()}</dt>
        </dl>
      </a>
  `;
    })
    .join("")}`;
};

export default Rovers;
