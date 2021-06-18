import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks/storeManipulation';
import useTOJtrialMobile from '../../hooks/useTOJtrialMobile';
import useEvalResponse from '../../hooks/useEvalResponse';
import useStartGame from '../../hooks/useStartGame';
import { calcThreshold } from '../../utils/calcThreshold';
import { maxTurnNr, initialISI } from '../../constants/constants';
import useUpdateResults from '../../hooks/useUpdateResults';
import GameMarkup from './GameMarkup';

const Game: React.FC = () => {
    const {isCorrect, showFeedback, playTrial, handleClick} = useTOJtrialMobile();
    const {balloonLives, fromBottom, threshold, thresholds, setThreshold, evalResponse} = useEvalResponse(isCorrect);
    const {balloonToShow, gameOn, handleStart} = useStartGame(playTrial);
    const { updateResults } = useUpdateResults();
    let currentISI = useRef<number>(initialISI);
    const activeArrow = useAppSelector(state => state.general.activeArrow);

    useEffect(() => {
        if (showFeedback){
            setTimeout(() => {
                evalResponse(isCorrect);
                playTrial(currentISI.current);
            }, 800);
        }
    }, [showFeedback, currentISI, playTrial, isCorrect, evalResponse]);

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
        updateResults(threshold);
        
    }, [threshold, updateResults])


    return (
        <GameMarkup
        threshold={threshold} 
        gameOn={gameOn} 
        balloonToShow={balloonToShow} 
        handleStart={handleStart} 
        fromBottom={fromBottom} 
        activeArrow={activeArrow}
        balloonLives={balloonLives}
        handleClick={handleClick}
        ></GameMarkup>
    );
};

export default Game;