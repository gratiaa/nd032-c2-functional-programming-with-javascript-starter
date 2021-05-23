import store from "./store.js";
import { fetchMarsRovers } from "./api.js";

import Rovers from "./components/Rovers.js";

const root = document.getElementById("root");

const updateStore = (store, newState) => {
  console.log(store, newState);

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
        <header class="p-5 flex space-x-2">
          <img class="w-7" src="./assets/images/udacity-logo.png" />
        </header>
        <main id="content">
          <div class="pb-32">
            <h1 class="text-3xl font-bold pb-3"
              <span>NASA Mars Rovers</span>
              <a class="pl-1 inline-block text-xs font-light underline text-gray-400" href="https://mars.nasa.gov/mer/" class="text-xs">Detail</a>
            </h1>
            <dl>
              <dt class="text-xs">Total</dt>
              <dd class="text-3xl font-bold">3</dd>
            </dl>
          </div>
          <div class="flex flex-row flex-wrap">
            ${Rovers(state, updateStore)}
          </div>
        </main>
        <footer class="text-xs p-5 text-purple-300 flex justify-between">
          <span>© Young Bae, 2021</span>
          <span>Made with API by <a href="https://api.nasa.gov/"><img class="w-10 inline-block" src="./assets/images/nasa-logo-web-rgb.png" /></a></span>
        </footer>
    `;
};

window.addEventListener("load", () => render(root, store));
