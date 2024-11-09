// Fetches data from the specified URL
import pokemon from 'pokemontcgsdk'
pokemon.configure({apiKey: 'd751b48e-24d0-4f22-bc06-8d520b9bdabd'})

const fetchData = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',

        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();  
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; // Throw error to be caught by caller
    }
  };
  
  //Fetches the data from the tcg depending on the name of the pokemon entered
  const fetchTcg = async (p) => {
    const result = await pokemon.card.where({ q: `name:${p}` });
    return result;
  };
  
  // Gets 20 Pokémon
  export const getAllPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    return await fetchData(url);
  };
  
  // Queries a specific Pokémon by name or ID
  export const searchPokemon = async (p) => {
    if (!p){
      return;
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${p}`;
    const pokeData = await fetchData(url)
    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeData.id}/`
    const speciesData = await fetchData(speciesUrl)
    const tcgData = await fetchTcg(p)
    const fullData = {...pokeData, ...speciesData, ...tcgData}
    console.log(fullData)
    return fullData;
  };
  