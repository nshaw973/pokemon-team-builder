import getTypeImage from "../components/images/typeImages"

const getCardTitleColor = (pokemon) => {
    if (pokemon.types.length === 2) {
      const firstTypeColor = getTypeImage(pokemon.types[0].type.name).color;
      const secondTypeColor = getTypeImage(pokemon.types[1].type.name).color;
  
      return {
        background: `
          linear-gradient(135deg, ${firstTypeColor} 49%, black 49%, black 51%, ${secondTypeColor} 51%)
        `,
      };
    } else {
      const singleColor = getTypeImage(pokemon.types[0].type.name).color;
      return { backgroundColor: singleColor };
    }
  };
  
  const flavorTextCheck = (pokemon) => {
    const textEntries = pokemon.flavor_text_entries;
    let flavorText = "No Dex Entry Found...";
    for (let i = 0; i < textEntries.length; i++) {
      if (textEntries[i].language.name === "en") {
        flavorText = textEntries[i].flavor_text;
        return flavorText; // Exit as soon as an English entry is found
      }
    }
    return flavorText; // Return default if no English entry is found
  };

  const pokeName = (pokemon) => {
    switch (pokemon) {
      case "hp":
        return "HP";
      case "special-attack":
        return "Special-Attack";
      case "special-defense":
        return "Special-Defense";
      default:
        return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
    }
  };

  export {getCardTitleColor, flavorTextCheck, pokeName};