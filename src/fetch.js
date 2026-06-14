export let selectedCategory = "";

//Witz aus der API laden
export async function getJoke() {
  try {
    const response = await fetch(selectedCategory);
    const joke = await response.json();

    //Witz-Objekt global abspeichern
    let currentJoke = {
      id: Math.random(),
      text: joke[0].text,
    };

    return currentJoke;
  } catch (error) {
    console.error("Fehler beim Laden des Witzes:", error);
    return {
      id: null,
      text: "Fehler: Witz konnte nicht geladen werden.",
    };
  }
}

//Kategorie im Dropdown ändern
export function changeCategory() {
  const selectElement = document.getElementById("joke-category");

  //eigentlich überflüssig, aber wenn selectElement nicht exisitert, stürt das System ab
  if (!selectElement) return;

  selectElement.addEventListener("change", (event) => {
    selectedCategory = event.target.value;
  });
}

//Getter-Funktion, damit selectedCategory in anderen Modulen zuverlässig gelesen werden kann
export function getSelectedCategory() {
  return selectedCategory;
}
