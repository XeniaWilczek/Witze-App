let currentJoke = null;

export async function getJoke() {
  const response = await fetch("https://witzapi.de/api/joke");
  const joke = await response.json();
  currentJoke = {
    id: Math.random(),
    text: joke[0].text,
  };

  return currentJoke;
}
