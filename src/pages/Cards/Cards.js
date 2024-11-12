import React from "react";
import {
  getCardTitleColor,
  flavorTextCheck,
  pokeName,
} from "../../utils/utils";
import getTypeImage from "../../components/images/typeImages";
import "./style.css";

const Cards = ({ pokemonData }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      <div className="mt-4 flex justify-center h-fit p-4">
        <div className="flex flex-row bg-base-100 shadow-xl w-80 h-full m-4">
          <div className="flex flex-col h-full">
          <figure>
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
              className="p-2 border mb-2 h-32 w-60"
            />
          </figure>
          <div className="flex flex-row h-3 w-full justify-around">
            <img
              src={getTypeImage(pokemonData.types[0].type.name).img}
              alt={pokemonData.types[0].type.name}
              className="w-3/12"
            />
            {pokemonData.types[1] && (
              <img
                src={getTypeImage(pokemonData.types[1].type.name).img}
                alt={pokemonData.types[1].type.name}
                className="w-3/12"
              />
            )}
          </div>
          </div>
          <div className="flex flex-col w-full">
            <div
              className="p-2 flex justify-between card-title text-white header-shadow"
              style={getCardTitleColor(pokemonData)}
            >
              <h2>{pokeName(pokemonData.name)}</h2>
              <h2>#{pokemonData.id}</h2>
            </div>
            <p className="w-full flex flex-wrap">data goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
