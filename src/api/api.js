import Game from "../model/Game";

export async function getGames({ page, size }) {
  const start = page * size - size;
  const end = start + size;
  const data = await gamesData;
  return {
    games: data.slice(start, end),
    total: data.length
  };
}

async function loadData() {
  try {
    const data = await (await fetch("/data/test.json")).json();
    return data.map(game => new Game(game));
  } catch (e) {
    console.error(e);
  }
}

/* This is to ensure that a one time call is made for the games data */
const gamesData = loadData();
