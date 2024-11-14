import React from "react";
import {
  getCardTitleColor,
  flavorTextCheck,
  pokeName,
} from "../../utils/utils";
import getTypeImage from "../../components/images/typeImages";
import "./style.css";

const Cards = ({ pokemonData }) => {
  const pokemon = pokemonData
  return (
    <ul className="flex flex-wrap justify-center">
      <li className="w-min">
        <div className=" mb-2 flex justify-center min-h-full">
          <div className="card-side shadow-xl flex flex-col ">
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
  </ul>
  );
};

export default Cards;
