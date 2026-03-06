export async function getJoke() {
  const response = await fetch(
    "https://witzapi.de/api/joke/?limit=1&category=programmierwitze&language=de",
  );
  const joke = await response.json();
  let currentJoke = {
    id: Math.random(),
    text: joke[0].text,
  };

  return currentJoke;
}
