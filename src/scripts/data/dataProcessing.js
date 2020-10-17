class DataBase {
  static getPokemon(keyword) {
    const URL = "https://pokeapi.co/api/v2/pokemon";
    return fetch(`${URL}/${keyword.toLowerCase()}`)
      .then((response) => response.json())
      .then((pokemon) => {
        console.log(`fetching`, keyword);
        if (pokemon) {
          return Promise.resolve(pokemon);
        } else {
          return Promise.reject(`hmm still errror broh !`);
        }
      });
  }
}

export default DataBase;
