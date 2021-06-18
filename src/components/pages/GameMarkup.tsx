import Feedback from '../Layout/Feedback';
import ArrowLeft from '../UI/ArrowLeft';
import ArrowRight from '../UI/ArrowRight';
import styles from './Game.module.scss';
import balloonImg from '../../assets/imgs/juli_jatek_lufi.png';
import React from 'react';

const GameMarkup: React.FC<{
    threshold: number,
    gameOn: boolean,
    balloonToShow: string,
    handleStart: () => void,
    fromBottom: string,
    activeArrow: string,
    balloonLives: number[],
    handleClick?: (event: React.MouseEvent) => void
}> = ({
    threshold, 
    gameOn, 
    balloonToShow, 
    handleStart, 
    fromBottom, 
    activeArrow,
    balloonLives,
    handleClick
}) => {
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
                {balloonLives.map(miniBalloonNr => <img 
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

export default GameMarkup;