import arrowUpGreen from '../assets/images/arrowUpGreen.svg';
import arrowDownRed from '../assets/images/arrowDownRed.svg';

export const switchIndicator = (title) => {
    switch(title) {
        case "Title 1":
            return arrowUpGreen;
        case "Title 2":
            return arrowDownRed;
        case "Title 3":
            return arrowUpGreen;
        case "Title 4":
            return arrowDownRed;
        case "Title 5":
            return arrowUpGreen;
        case "Title 6":
            return arrowDownRed;
        case "Title 7":
            return arrowUpGreen;
        case "Title 8":
            return arrowDownRed;
        default: return;
    }
}
