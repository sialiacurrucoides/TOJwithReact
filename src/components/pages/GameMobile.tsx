import { useState, useRef, useEffect, useCallback } from 'react';
import { useAppSelector } from '../../hooks/storeManipulation';
import { useAppDispatch } from '../../hooks/storeManipulation';
import styles from './Game.module.scss';
import balloonImg from '../../assets/imgs/juli_jatek_lufi.png';
import balloonGoImg from '../../assets/imgs/juli_jatek_lufi_GO.png'; 
import useTOJtrialMobile from '../../hooks/useTOJtrialMobile';
import { calcThreshold } from '../../utils/calcThreshold';
import { maxTurnNr } from '../../constants/constants';
import Feedback from '../Layout/Feedback';
import { generalStateActions } from '../../store';
import { referenceThreshold } from '../../constants/constants';
import ArrowLeft from '../UI/ArrowLeft';
import ArrowRight from '../UI/ArrowRight';


const initialISI = 120;
const initialStep = 20;
const minStep = 5;
const minPosChange = 2.5;
const initialBalloonPosition = 40;

const Game: React.FC = () => {
    const [ballonLives, setBallonLives] = useState([1,2,3,4,5,6,7,8]);
    const {isCorrect, showFeedback, playTrial, handleClick} = useTOJtrialMobile();
    const [balloonToShow, setBalloonToShow] = useState(balloonGoImg);
    const [gameOn, setGameOn] = useState(false);
    // const [gameEnd, setGameEnd] = useState(false);
    const [fromBottom, setFromBottom] = useState(`${initialBalloonPosition}%`);
    let currentISI = useRef<number>(initialISI);
    const [threshold, setThreshold] = useState(200);
    let trialNumber = useRef<number>(0);
    let thresholds = useRef<number[]>([]);
    let correctInARow = useRef(0);
    let step = useRef<number>(initialStep);
    let errorNumber = useRef<number>(0);
    const activeArrow = useAppSelector(state => state.general.activeArrow);
    const dispatch = useAppDispatch();

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
    }

    const handleStart = () => {
        setBalloonToShow(balloonImg);
        setGameOn(true);
        playTrial(initialISI);
    };

    const updateResults = useCallback(
        (calculatedThreshold: number) => {
            dispatch(generalStateActions.setLongestRun(trialNumber.current));
            dispatch(generalStateActions.setSmallestThreshold(calculatedThreshold));
            if (calculatedThreshold < referenceThreshold) dispatch(generalStateActions.setBetterTimes());
        },
        [trialNumber, dispatch]
    );

    useEffect(() => {
        if (showFeedback){
            setTimeout(() => {
                evalResponse(isCorrect);
                playTrial(currentISI.current);
            }, 800);
        }
    }, [showFeedback, currentISI, playTrial, isCorrect]);

    useEffect(() => {
        const ths = thresholds.current;
        // 8 turn points or three times the same threshold in a row
        if (ths.length === maxTurnNr || 
            (ths[ths.length - 1] === ths[ths.length - 2] && 
            ths[ths.length - 2] === ths[ths.length - 3])){
                const calculatedThreshold = calcThreshold(ths);
                setThreshold(calculatedThreshold); 
            }
    }, [thresholds]);

    useEffect(() => {
        updateResults(threshold);
        
    }, [threshold, updateResults])


    return (
        <div className={styles.gameField}>
            {!!threshold && <Feedback threshold={threshold} />}
            {!gameOn && <div className={styles.startText}><span>Click GO!</span></div>}
            {!threshold && <div className={styles.balloon} onClick={handleStart} style={{bottom: fromBottom}}>
                <img src={balloonToShow} alt="balloon to levitate"/>
            </div>}
            <div className={styles.feedback}>
                <ArrowLeft activeArrow={activeArrow} handleClick={handleClick}/>
                <div className={styles.balloonLives}>
                    {ballonLives.map(miniBalloonNr => <img 
                    width="20px"
                    height="20px"
                    key={miniBalloonNr} 
                    src={balloonImg}
                    alt={`ballon${miniBalloonNr}`}
                     />)}
                </div>
                <ArrowRight activeArrow={activeArrow} handleClick={handleClick}/>
            </div>
        </div>
    );
};

export default Game;