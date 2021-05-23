const RoverSummary = ({ name, launchDate, landingDate, status }) => {
  return `<dl class="rover_card p-4">
            <dd class="text-xs text-gray-400 font-light">Name</dd>
            <dt class="text-lg pb-2">${name}</dt>
            <dd class="text-xs text-gray-400 font-light">Launch Date</dd>
            <dt class="text-lg pb-2">${launchDate}</dt>
            <dd class="text-xs text-gray-400 font-light">Landing Date</dd>
            <dt class="text-lg pb-2">${landingDate}</dt>
            <dd class="text-xs text-gray-400 font-light">Status</dd>
            <dt class="text-lg pb-2">${status.toUpperCase()}</dt>
          </dl>`;
};

export default RoverSummary;
