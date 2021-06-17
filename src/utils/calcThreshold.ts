import { maxTurnNr } from "../constants/constants";

const roundToTwoDecimals = (number:number) => {
    return Math.floor(number * 100)/100;
}

export const calcThreshold = (thresholds: number[]) => {
    const total = thresholds.reduce((acc, curr, index) => index > 1 ? acc + curr : acc, 0);
    return thresholds.length < 8 ? thresholds[thresholds.length - 1] : roundToTwoDecimals(total/(maxTurnNr - 2));
}