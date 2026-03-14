export let selectedCategory = "";

export async function getJoke() {
  const response = await fetch(selectedCategory);
  const joke = await response.json();
  let currentJoke = {
    id: Math.random(),
    text: joke[0].text,
  };

  return currentJoke;
}

export function changeCategory() {
  const selectElement = document.getElementById("joke-category");
  selectElement.addEventListener("change", (event) => {
    //eigentlich überflüssig, aber wenn selectElement nicht exisitert, stürt das System ab
    if (selectElement) {
      selectedCategory = event.target.value;
    }
  });
}
