import React, { useState } from "react";
import { getAllPokemon, searchPokemon } from "../../utils/APIs/Pokemon";
import Cards from "../Cards/Cards";
import Team from "../Team/Team";

const Homepage = () => {
  const [inputValue, setInputValue] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await searchPokemon(inputValue); // Await data from searchPokemon
      setPokemonData(data); // Set data to state
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  return (
    <div className="flex justify-center flex-col">
      <h1 className="bg-black text-white">Create-a-Team</h1>
      <form
        onSubmit={handleSubmit}
        className="pb-2 bg-neutral-600 flex justify-center p-2"
      >
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search Pokemon..."
            className="input-bordered h-8 rounded-l max-w-xs pl-2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="h-8 bg-white rounded-r text-sm px-4 border"
          >
            Search
          </button>
        </div>
      </form>
      {pokemonData && (
        <Cards pokemonData={pokemonData} className="flex flex-col" />
      )}

      <Team pokemonData={pokemonData} />
    </div>
  );
};

export default Homepage;
