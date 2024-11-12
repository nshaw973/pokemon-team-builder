import React, { useState } from "react";
import { getAllPokemon, searchPokemon } from "../../utils/APIs/Pokemon";
import Cards from "../Cards/Cards";
import Team from "../Team/Team";

const Homepage = () => {
  const [inputValue, setInputValue] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Add error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors
    try {
      const data = await searchPokemon(inputValue.toLowerCase());
      if (!data || data.length === 0) {
        throw new Error("Pokémon not found.");
      }
      setPokemonData(data);
    } catch (err) {
      setError(err.message); // Set error message if no data is found
      console.error("Error fetching Pokémon data:", err);
    } finally {
      setLoading(false);
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

      {loading && (
        <div className="flex justify-center mt-4">
          <div className="loading loading-bars loading-lg"></div> {/* Add your spinner here */}
        </div>
      )}

      {error && !loading && (
        <div className="text-red-500 text-center mt-4">
          {error} {/* Display error message */}
        </div>
      )}

      {pokemonData && !loading && !error && (
        <Cards pokemonData={pokemonData} className="flex flex-col" />
      )}

      <Team pokemonData={pokemonData} />
    </div>
  );
};

export default Homepage;
