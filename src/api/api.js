export async function getGames() {
    return await gamesData;
}

async function loadData() {
    try {
      const data = await (await fetch("/data/test.json")).json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  
  /* This is to ensure that a one time call is made for the games data */
  const gamesData = loadData();