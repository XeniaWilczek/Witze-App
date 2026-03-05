let jokes = [];

//LocalStorage darf am Anfang nicht null oder undefined, sonst kann nichts hinzugefügt werden
export function loadJokesFromLocalStorage() {
  const jokesFromStorage = JSON.parse(localStorage.getItem("jokes")) || [];
  const jokeContainer = document.querySelector(".stored-jokes");
  jokes = jokesFromStorage;
  //Jeder gespeicherte Witz soll unten angezeigt werden
  jokes.forEach((joke) => {
    displaySavedJoke(joke);
  });
}

export function addJokeToLocalStorage(joke) {
  const alertText = document.getElementsByClassName("alert-text")[0];
  // Prüfen, ob id des aktuellen Witzes einer id im Array entspricht
  const existingJoke = jokes.find((savedJoke) => savedJoke.id === joke.id);

  if (!existingJoke) {
    jokes.push(joke);
    localStorage.setItem("jokes", JSON.stringify(jokes));
  }
}

export function displaySavedJoke(joke) {
  const jokeContainer = document.querySelector(".stored-jokes");
  const htmlString = `<div class="stored-jokes__joke">
  <p class="alert-text"></p>
          <p class="joke-text">${joke.text}</p>
          <button id="${joke.id}" class="stored-jokes__button">
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
  deleteButtonEvents(joke);
}

//if (alertText) {
// alertText.innerHTML = "";
//  }
// } else {
//   alertText.innerhHTML = "Keine WItze gespeichert";
//  }

export function deleteJoke(id) {
  //Löschen des angeklickten Witzes aus dem Array
  // Prüfung: Ist es die id des zu löschenden Witzes?
  const filteredJokes = jokes.filter((joke) => {
    return joke.id !== id;
  });

  jokes = filteredJokes;
  localStorage.setItem("jokes", JSON.stringify(jokes));

  //Container leeren und nur verbliebene Witz-Texte anzeigen
  const mainContainer = document.querySelector(".stored-jokes");
  mainContainer.innerHTML = "";
  jokes.forEach((joke) => displaySavedJoke(joke));
}

export function deleteButtonEvents(joke) {
  // Alle delete-Buttons finden
  console.log(joke);
  const allDeleteButtons = document.querySelectorAll(`[id="${joke.id}"]`);

  allDeleteButtons.forEach((deleteButton) => {
    console.log(deleteButton);
    deleteButton.addEventListener("click", () => {
      // id des angeklickten Buttons nehmen
      console.log(deleteButton);
      deleteJoke(joke.id);
    });
  });
}
