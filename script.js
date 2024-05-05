function fetchPokemon() {
  const pokemon_name = document
    .querySelector("#pokemon_name")
    .value.toLowerCase();
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const pokemon_image = data.sprites.front_shiny;
      const image = document.querySelector("#pokemonImage");
      image.src = pokemon_image;

      // Pokemon details
      document.querySelector(
        "#pokemon_id"
      ).innerHTML = `Pokemon ID: ${data.id}`;
      document.querySelector(
        "#pokemon_type"
      ).innerHTML = `Type: ${data.types[0].type.name}`;
      document.querySelector(
        "#pokemon_weight"
      ).innerHTML = `Weight: ${data.weight}`;
    })
    .catch((error) => {
      console.log("Error fetching Pokemon:", error);
    });
}
