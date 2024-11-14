import React, { useState } from "react";
import { searchPokemon } from "../../utils/APIs/Pokemon";
import Cards from "../Cards/Cards";
import Team from "../Team/Team";
import { allPokemon } from "../../utils/other/AllPokemon";

const Homepage = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]); // Holds filtered suggestions
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handles input changes and filters suggestions

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 1) {
      const filteredSuggestions = allPokemon.filter((pokemon) =>
        pokemon.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5)); // Show top 5 suggestions
    } else {
      setSuggestions([]);
    }
  };

  // Handles suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]); // Clear suggestions after selection
    handleSubmit(null, suggestion); // Trigger search with the selected suggestion
  };

  // Handles form submission and searches for Pokémon
  const handleSubmit = async (e, query) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await searchPokemon((query || inputValue).toLowerCase());
      if (!data) throw new Error("Pokémon not found.");
      setPokemonData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setInputValue("")
      setSuggestions([])
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
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search Pokemon..."
            className="input-bordered h-8 rounded-l max-w-xs pl-2"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="h-8 bg-white rounded-r text-sm px-4 border"
          >
            Search
          </button>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-10 bg-white border rounded shadow-lg w-full z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>

      {loading && (
        <div className="flex justify-center mt-4">
          <div className="loading loading-bars loading-lg"></div>{" "}
        </div>
      )}
      {error && !loading && (
        <div className="text-red-500 text-center mt-4">{error}</div>
      )}
      {pokemonData && !loading && !error && <Cards pokemonData={pokemonData} />}
      <Team pokemonData={pokemonData} />
    </div>
  );
};

export default Homepage;
