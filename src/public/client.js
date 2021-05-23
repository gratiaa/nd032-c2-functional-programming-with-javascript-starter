import store from "./store.js";
import { fetchMarsRovers } from "./api.js";

import { Header, Rovers, Footer } from "./components/index.js";

const root = document.getElementById("root");

const updateStore = (store, newState) => {
  const nextStore = Immutable.Map(Object.assign(store, newState));

  if (Immutable.is(store, nextStore)) {
    return;
  }

  store = nextStore;

  return render(root, store);
};

const render = async (root, state) => {
  root.innerHTML = await App(state);

  const rovers = state.rovers.map(({ name }) => name);

  rovers.map((rover) => {
    const btnCloseDetail = document.getElementById(`${rover}_details_close`);

    if (!btnCloseDetail) {
      return;
    }

    btnCloseDetail.addEventListener("click", () => {
      document.getElementById(`${rover}_details_summary`).click();
    });
  });
};

const App = async (state) => {
  const roversData = await fetchMarsRovers(store);

  updateStore(store, { rovers: roversData });

  return `
        ${Header()}
        <main id="content">
          <div class="pb-32">
            <h1 class="text-3xl font-bold pb-3"
              <span>NASA Mars Rovers</span>
              <a class="pl-1 inline-block text-xs font-light underline text-gray-400" href="https://mars.nasa.gov/mer/" class="text-xs" target="_blank">Detail</a>
            </h1>
            <dl>
              <dt class="text-xs">Total</dt>
              <dd class="text-3xl font-bold">${roversData.length}</dd>
            </dl>
          </div>
          <div class="flex flex-row flex-wrap">
            ${Rovers(state, updateStore)}
          </div>
        </main>
        ${Footer()}
    `;
};

window.addEventListener("load", () => render(root, store));
