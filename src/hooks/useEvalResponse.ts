
import { useState, useRef } from 'react';
import { maxTurnNr, maxISI } from '../constants/constants';
import { calcThreshold } from '../utils/calcThreshold';

const initialISI = 120;
const initialStep = 20;
const minStep = 5;
const minPosChange = 2.5;
const initialBalloonPosition = 40;

const useEvalResponse = (isCorrect: boolean) => {
    const [balloonLives, setBallonLives] = useState([1,2,3,4,5,6,7,8]);
    const [fromBottom, setFromBottom] = useState(`${initialBalloonPosition}%`);
    let currentISI = useRef<number>(initialISI);
    const [threshold, setThreshold] = useState(maxISI);
    let trialNumber = useRef<number>(0);
    let thresholds = useRef<number[]>([]);
    let correctInARow = useRef(0);
    let step = useRef<number>(initialStep);
    let errorNumber = useRef<number>(0);


    const evalResponse = (isCorrect: boolean) => {
        trialNumber.current++;
        if (isCorrect){
            if (correctInARow.current < 3){
                correctInARow.current++;
            } else {
                currentISI.current -= step.current;
                step.current = step.current/2 > minStep ? step.current/2 : minStep;
                correctInARow.current = 0;
            }
        } else {
            correctInARow.current = 0;
            errorNumber.current++;
            currentISI.current += step.current;
            step.current = step.current/2 > minStep ? step.current/2 : minStep;
            setBallonLives(prev => prev.filter(item => item !== prev.length));
            thresholds.current = [...thresholds.current, currentISI.current];
            if (errorNumber.current === maxTurnNr){
                setThreshold(calcThreshold(thresholds.current));
            }
        }
        const position = initialBalloonPosition + minPosChange*(initialISI - currentISI.current)/minStep;
        setFromBottom(`${position}%`);
    };

    return {balloonLives, fromBottom, threshold, thresholds, trialNumber, setThreshold, evalResponse};

};

export default useEvalResponse;