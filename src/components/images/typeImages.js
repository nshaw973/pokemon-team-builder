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
            color = "#4caf50"; // green-600
            break;
        case "dark":
            img = dark;
            color = "#212121"; // gray-900
            break;
        case "dragon":
            img = dragon;
            color = "#1976d2"; // blue-700
            break;
        case "electric":
            img = electric;
            color = "#fbc02d"; // yellow-500
            break;
        case "fairy":
            img = fairy;
            color = "#f06292"; // pink-400
            break;
        case "fighting":
            img = fighting;
            color = "#d32f2f"; // red-700
            break;
        case "fire":
            img = fire;
            color = "#f44336"; // red-500
            break;
        case "flying":
            img = flying;
            color = "#4dd0e1"; // cyan-400
            break;
        case "ghost":
            img = ghost;
            color = "#6a1b9a"; // purple-600
            break;
        case "grass":
            img = grass;
            color = "#66bb6a"; // green-500
            break;
        case "ground":
            img = ground;
            color = "#f57f17"; // yellow-600
            break;
        case "ice":
            img = ice;
            color = "#4fc3f7"; // blue-300
            break;
        case "normal":
            img = normal;
            color = "#9e9e9e"; // gray-500
            break;
        case "poison":
            img = poison;
            color = "#ab47bc"; // purple-500
            break;
        case "psychic":
            img = psychic;
            color = "#ec407a"; // pink-600
            break;
        case "rock":
            img = rock;
            color = "#f9a825"; // yellow-800
            break;
        case "steel":
            img = steel;
            color = "#616161"; // gray-700
            break;
        case "water":
            img = water;
            color = "#42a5f5"; // blue-500
            break;
        default:
            return { img: null, color: "#bdbdbd" }; // gray-400 as default
    }

    return { img, color };
}

export default getTypeImage;
