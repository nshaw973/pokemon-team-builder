import React from "react";

const Cards = ({ pokemonData }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      <div className="mt-4 flex justify-center">
        <div className="card card-side bg-base-100 shadow-xl w-fit h-fit m-4">
          <figure>
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {pokemonData.name} #{pokemonData.id}
            </h2>
            <p>This is {pokemonData.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
