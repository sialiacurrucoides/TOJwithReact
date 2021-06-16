import { useState } from 'react';
import styles from './Game.module.scss';
import balloonImg from '../../assets/imgs/juli_jatek_lufi.png';
import balloonGoImg from '../../assets/imgs/juli_jatek_lufi_GO.png'; 

const Game: React.FC = () => {
    const [ballonLives, setBallonLives] = useState([1,2,3,4,5,6,7,8]);

    return (
        <div className={styles.gameField}>
            <div className={styles.startText}><span>Click GO!</span></div>
            <div className={styles.balloon}>
                <img src={balloonGoImg} alt="balloon to levitate"/>
            </div>
            <div className={styles.feedback}>
                <div className={styles.leftArrow}>
                    <span className={styles.arrow}> &larr; </span>
                </div>
                <div className={styles.balloonLives}>
                    {ballonLives.map(miniBalloonNr => <img 
                    width="20px"
                    height="20px"
                    key={miniBalloonNr} 
                    src={balloonImg}
                    alt={`ballon${miniBalloonNr}`}
                     />)}
                </div>
                <div className={styles.rightArrow}>
                    <span className={styles.arrow}> &rarr; </span>
                </div>
            </div>
        </div>
    );
};

export default Game;