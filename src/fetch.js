const developerJokes =
  "https://witzapi.de/api/joke/?limit=1&category=programmierwitze&language=de";
const trickQuestions =
  "https://witzapi.de/api/joke/?limit=1&category=scherzfragen&language=de";
const schoolJokes =
  "https://witzapi.de/api/joke/?limit=1&category=schulwitze&language=de";

export async function getJoke() {
  const response = await fetch(selectedCategory);
  const joke = await response.json();
  let currentJoke = {
    id: Math.random(),
    text: joke[0].text,
  };

  return currentJoke;
}
