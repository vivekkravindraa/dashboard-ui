import arrowUpGreen from '../assets/images/arrowUpGreen.svg';
import arrowDownRed from '../assets/images/arrowDownRed.svg';

export const switchIndicator = (title) => {
    switch(title) {
        case "Total Transactions":
            return arrowUpGreen;
        case "Base Rebate":
            return arrowDownRed;
        case "Estimated Growth Rebate":
            return arrowUpGreen;
        case "Estimated Gain Share":
            return arrowDownRed;
        case "FBI Rebate":
            return arrowUpGreen;
        case "Admin Fees":
            return arrowDownRed;
        case "Total Rebate":
            return arrowUpGreen;
        case "Excess Revenue Points":
            return arrowDownRed;
        default: return;
    }
}
