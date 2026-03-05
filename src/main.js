import "./index.scss";
import { getJoke } from "./fetch.js";
import {
  addJokeToLocalStorage,
  loadJokesFromLocalStorage,
  displaySavedJoke,
  deleteButtonEvents,
} from "./save.js";
//Witz-Objekt global abspeichern

let currentJoke = "";
async function init() {
  loadJokesFromLocalStorage();
  loadJoke();
  // deleteButtonEvents();
}

function loadJoke() {
  const loadButton = document.getElementById("load-button");
  loadButton.addEventListener("click", async () => {
    currentJoke = await getJoke();
    console.log(currentJoke);
    //ganzes Objekt wird überreicht, aber nur Text soll angezeigt werden
    renderJoke(currentJoke.text);
    displaySaveButton(currentJoke);
  });
}

function renderJoke(text) {
  const jokeElement = document.querySelector(".loaded-jokes__text");
  jokeElement.innerText = text;
}

//Save-Button wird beim erstmaligen Anklicken des Neuen-Witz-laden-Buttons dynamisch erzeugt
function displaySaveButton(joke) {
  const buttonContainer = document.querySelector(".loaded-jokes__buttons");
  if (!document.getElementById("save-button")) {
    const htmlString = `<button class="loaded-jokes__button" id="save-button">
            Witz speichern
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </button>`;
    buttonContainer.insertAdjacentHTML("beforeend", htmlString);
    //saveButtonEvents() erst danach aufrufen -->zuerst muss der save-Button existieren
    saveButtonEvents(joke);
  }
}
function saveButtonEvents() {
  const saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", () => {
    addJokeToLocalStorage(currentJoke);
    displaySavedJoke(currentJoke);
  });
}
console.log();
init();
