import { getJoke } from "./fetch.js";
let jokes = JSON.parse(localStorage.getItem("jokes")) || [];
const jokeId = await getJoke().id;

export function addJokeToLocalStorage(joke) {
  const alertText = document.getElementsByClassName("alert-text")[0];
  const jokeContainer = document.querySelector(".stored-jokes");
  //Witz hinzufügen zum Array "jokes"
  jokes.push(joke);
  //Array speichern
  localStorage.setItem("jokes", JSON.stringify(jokes));

  if (alertText) {
    alertText.remove();
  } else {
    alertText.add();
    alertText.innerHTML = "Es wurde noch kein Witz gespeichert";
  }
  displaySavedJoke(joke);
}

//LocalStorage darf am Anfang nicht leer, sonst kann nichts hinzugefügt werden
export function loadJokesFromLocalStorage() {
  const jokesFromStorage = JSON.parse(localStorage.getItem("jokes"));
  const jokeContainer = document.querySelector(".stored-jokes");
}

export function displaySavedJoke(savedJoke) {
  const jokeContainer = document.querySelector(".stored-jokes");
  const htmlString = `<div class="stored-jokes__joke">
  <p class="alert-text"></p>
          <p>${savedJoke.text}</p>
          <button class="stored-jokes__button">
          <svg class="stored-jokes__svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"a
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
            />
          </svg>
           </button>
        </div>`;
  jokeContainer.innerHTML += htmlString;
}
