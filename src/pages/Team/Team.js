import React, { useState, useEffect } from "react";
import getTypeImage from "../../components/images/typeImages";
import {
  getCardTitleColor,
  flavorTextCheck,
  pokeName,
} from "../../utils/utils";
import "./style.css";

const Team = ({ pokemonData }) => {
  // Initialize teamArray as a state variable
  const [teamArray, setTeamArray] = useState([]);

  // Load team from localStorage when component mounts
  useEffect(() => {
    const savedTeam = JSON.parse(localStorage.getItem("pokemonTeam"));
    if (savedTeam) {
      setTeamArray(savedTeam);
    }
  }, []);

  // Update localStorage whenever teamArray changes
  useEffect(() => {
    localStorage.setItem("pokemonTeam", JSON.stringify(teamArray));
  }, [teamArray]);

  // Function to add a Pokémon to the team
  const addToTeam = () => {
    if (!pokemonData) {
      alert("Must add a valid Pokémon!");
      return;
    }
    if (teamArray.length < 6) {
      setTeamArray([...teamArray, pokemonData]);
    } else {
      alert("You can only have a maximum of 6 Pokémon in your team!");
    }
  };

  // Function to remove a Pokémon from the team based on index
  const removeFromTeam = (indexToRemove) => {
    setTeamArray(teamArray.filter((_, index) => index !== indexToRemove));
  };

  const clearTeam = () => {
    setTeamArray([]);
  };

  // Extra functions
  const arrayCheck = () => {
    if (teamArray.length === 0) {
      return false;
    }
    return true;
  };

  return (
    <div>
      {pokemonData && (
        <div className="w-full bg-neutral-200">
          <button className="bg-white shadow-xl p-2 w-80 mt-2 hover:bg-sky-200 active:bg-sky-400" onClick={addToTeam}>
            Add to Team
          </button>
          <div className="w-full bg-black h-2 mt-2 shadow-xl" />
        </div>
      )}
      {/* Display the team */}
      <div className="flex flex-wrap flex-col">
        {arrayCheck() && (
          <div>
            <h3 className="flex flex-row justify-between bg-neutral-400 p-2 text-white shadow-xl">
              <p>Your Team:</p>
              <p className="btn btn-xs btn-error" onClick={clearTeam}>
                Clear Team
              </p>
            </h3>
          </div>
        )}

        <ul className="flex flex-wrap justify-center">
          {teamArray.map((pokemon, index) => (
            <li key={index} className="w-min">
              <div className="mt-2 mb-2 flex justify-center min-h-full">
                <div className="card-side shadow-xl m-4 flex flex-col ">
                  <div className="flex flex-row">
                    <div className="flex flex-col items-center">
                      {/* Image */}
                      <figure className="flex flex-col p-2 border-2 shadow-black shadow-sm shadow-inner">
                        <img
                          src={pokemon.sprites.front_default}
                          alt={pokemon.name}
                          className="p-2 border-b-2 mb-2 h-32 w-32"
                        />
                        {/* Typing */}
                        <div className="flex flex-row h-3 w-full justify-around">
                          <img
                            src={getTypeImage(pokemon.types[0].type.name).img}
                            alt={pokemon.types[0].type.name}
                            className="w-5/12"
                          />
                          {pokemon.types[1] && (
                            <img
                              src={getTypeImage(pokemon.types[1].type.name).img}
                              alt={pokemon.types[1].type.name}
                              className="w-5/12"
                            />
                          )}
                        </div>
                      </figure>
                    </div>
                    {/* Right Side under the name */}
                    <div className="w-full shadow-inner">
                      <div
                        className="card-title pl-2 text-white flex justify-between items-center p-2 min-w-48 shadow-black shadow-sm shadow-inner"
                        style={getCardTitleColor(pokemon)}
                      >
                        <div className="flex justify-between w-full">
                          <p className="header-shadow text-sm">
                            {pokeName(pokemon.name)}{" "}
                          </p>
                          <p className="header-shadow">#{pokemon.id}</p>
                        </div>
                        {/* Delete Button */}

                        <button
                          onClick={() => removeFromTeam(index)}
                          className="flex justify-center text-sm hover:text-red-600"
                        >
                          X
                        </button>
                      </div>
                      <div className="w-full">
                        <div className="w-full">
                          <ul className="flex flex-col w-full">
                            {pokemon.stats.map((pokeStat, index) => (
                              <li
                                key={index}
                                className="flex flex-row w-48 justify-between pl-2 pr-2 text-sm"
                              >
                                <p>{pokeName(pokeStat.stat.name)}: </p>
                                <p>{pokeStat.base_stat}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Dex Entry */}
                  <div>
                    <p className="flex justify-start w-full bg-neutral-500 text-white pl-2 header-shadow">
                      Dex Entry:{" "}
                    </p>
                    <p className="text-left p-4 text-wrap w-full min-h-24">
                      {flavorTextCheck(pokemon)}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
