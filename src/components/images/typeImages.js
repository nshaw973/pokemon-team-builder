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
    switch (typeName) {
        case "bug":
            return bug;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "electric":
            return electric;
        case "fairy":
            return fairy;
        case "fighting":
            return fighting;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "ghost":
            return ghost;
        case "grass":
            return grass;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        default:
            return null; // Return null or a default image if typeName is invalid
    }
}

export default getTypeImage;
