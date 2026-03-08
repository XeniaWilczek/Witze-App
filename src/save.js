export let jokes = [];

//LocalStorage darf am Anfang nicht null oder undefined, sonst kann nichts hinzugefügt werden
export function loadJokesFromLocalStorage() {
  const alertText = document.getElementById("alert-text");
  const jokesFromStorage = JSON.parse(localStorage.getItem("jokes")) || [];
  const jokeContainer = document.querySelector(".stored-jokes");
  jokes = jokesFromStorage;
  if (jokesFromStorage.length === 0) {
    alertText.innerHTML = "Es wurden noch keine Witze gespeichert.";
  } else {
    alertText.innerHTML = "";
    jokes.forEach((joke) => {
      displaySavedJoke(joke);
    });
  }
}

export function addJokeToLocalStorage(joke) {
  // Prüfen, ob id des aktuellen Witzes einer id im Array entspricht
  jokes.push(joke);
  localStorage.setItem("jokes", JSON.stringify(jokes));
}

export function displaySavedJoke(joke) {
  const alertText = document.getElementById("alert-text");
  const jokeContainer = document.querySelector(".stored-jokes");
  const htmlString = `<div class="stored-jokes__joke">
          <p class="joke-text">${joke.text}</p>
          <button id="${joke.id}" class="stored-jokes__button">
          <svg class="stored-jokes__svg"
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
              d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
            />
          </svg>
           </button>
        </div>`;
  jokeContainer.innerHTML += htmlString;
  alertText.innerHTML = "";
  deleteButtonEvents();
}

export function deleteJoke(id) {
  const alertText = document.getElementById("alert-text");
  const jokeContainer = document.querySelector(".stored-jokes");
  //Löschen des angeklickten Witzes aus dem Array
  // Prüfung: Ist es die id des zu löschenden Witzes?
  const filteredJokes = jokes.filter((joke) => {
    return joke.id !== id;
  });
  console.log(id);
  console.log(filteredJokes);
  jokes = filteredJokes;

  localStorage.setItem("jokes", JSON.stringify(jokes));

  //Container leeren und nur verbliebene Witz-Texte anzeigen
  jokeContainer.innerHTML = "";
  jokes.forEach((joke) => displaySavedJoke(joke));
  if (jokeContainer.innerHTML === "") {
    alertText.innerHTML = "Es wurden noch keine Witze gespeichert.";
  }
}

export function deleteButtonEvents() {
  const allDeleteButtons = document.querySelectorAll(".stored-jokes__button");
  console.log(allDeleteButtons);
  allDeleteButtons.forEach((deleteButton) =>
    deleteButton.addEventListener("click", () => {
      deleteJoke(Number(deleteButton.id));
    }),
  );
}
