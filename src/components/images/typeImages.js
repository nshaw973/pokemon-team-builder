import bug from './types/bug.png';
import dark from './types/dark.png';
import dragon from './types/dragon.png';
import electric from './types/electric.png';
import fairy from './types/fairy.png';
import fighting from './types/fighting.png';
import fire from './types/fire.png';
import flying from './types/flying.png';
import ghost from './types/ghost.png';
import grass from './types/grass.png';
import ground from './types/ground.png';
import ice from './types/ice.png';
import normal from './types/normal.png';
import poison from './types/poison.png';
import psychic from './types/psychic.png';
import rock from './types/rock.png';
import steel from './types/steel.png';
import water from './types/water.png';

function getTypeImage(typeName) {
    let img, color;

    switch (typeName) {
        case "bug":
            img = bug;
            color = "bg-green-600";
            break;
        case "dark":
            img = dark;
            color = "bg-gray-900";
            break;
        case "dragon":
            img = dragon;
            color = "bg-blue-700";
            break;
        case "electric":
            img = electric;
            color = "bg-yellow-500";
            break;
        case "fairy":
            img = fairy;
            color = "bg-pink-400";
            break;
        case "fighting":
            img = fighting;
            color = "bg-red-700";
            break;
        case "fire":
            img = fire;
            color = "bg-red-500";
            break;
        case "flying":
            img = flying;
            color = "bg-cyan-400";
            break;
        case "ghost":
            img = ghost;
            color = "bg-purple-600";
            break;
        case "grass":
            img = grass;
            color = "bg-green-500";
            break;
        case "ground":
            img = ground;
            color = "bg-yellow-600";
            break;
        case "ice":
            img = ice;
            color = "bg-blue-300";
            break;
        case "normal":
            img = normal;
            color = "bg-gray-500";
            break;
        case "poison":
            img = poison;
            color = "bg-purple-500";
            break;
        case "psychic":
            img = psychic;
            color = "bg-pink-600";
            break;
        case "rock":
            img = rock;
            color = "bg-yellow-800";
            break;
        case "steel":
            img = steel;
            color = "bg-gray-700";
            break;
        case "water":
            img = water;
            color = "bg-blue-500";
            break;
        default:
            return { img: null, color: "bg-gray-400" }; // Return default values
    }

    return { img, color };
}


export default getTypeImage;
