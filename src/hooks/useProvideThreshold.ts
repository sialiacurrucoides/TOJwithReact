import { useEffect, useRef } from 'react';
import { calcThreshold } from '../utils/calcThreshold';
import { maxTurnNr, initialISI, maxISI } from '../constants/constants';
import useEvalResponse from './useEvalResponse';
import useUpdateResults from './useUpdateResults';
import useStartGame from './useStartGame';
import { useAppSelector } from './storeManipulation';

const useProvideThreshold = (isCorrect: boolean, showFeedback: boolean, playTrial: (isi: number) => void) => {
    const {balloonLives, fromBottom, threshold, thresholds, trialNumber, setThreshold, evalResponse} = useEvalResponse(isCorrect);
    const {balloonToShow, gameOn, handleStart} = useStartGame(playTrial);
    const { updateResults } = useUpdateResults(trialNumber);
    let currentISI = useRef<number>(initialISI);
    const activeArrow = useAppSelector(state => state.general.activeArrow);


    useEffect(() => {
        if (showFeedback){
            setTimeout(() => {
                const isOver = evalResponse(isCorrect);
                if (!isOver) playTrial(currentISI.current);
            }, 900);
        }
    }, [showFeedback, currentISI, playTrial, isCorrect, evalResponse, balloonLives]);


    useEffect(() => {
        const ths = thresholds.current;
        // 8 turn points or three times the same threshold in a row
        if (ths.length === maxTurnNr || 
            (ths[ths.length - 1] === ths[ths.length - 2] && 
            ths[ths.length - 2] === ths[ths.length - 3])){
                const calculatedThreshold = calcThreshold(ths);
                setThreshold(calculatedThreshold); 
            }
    }, [thresholds, setThreshold]);

    useEffect(() => {
        if (threshold && threshold !== maxISI) updateResults(threshold);
        
    }, [threshold, updateResults]);

    return { balloonLives, fromBottom, balloonToShow, gameOn, handleStart, activeArrow, threshold};
};

export default useProvideThreshold;