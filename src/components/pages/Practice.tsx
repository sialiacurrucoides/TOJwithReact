import { useState, useEffect } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import Button from '../UI/Button';

import styles from './Practice.module.scss';
import { createSoundSample } from '../../utils/createSoundSample';

// const rightToLeft = new Audio('mtojsounds/soundRL_ISI180.wav');
// const leftToRight = new Audio('mtojsounds/soundLF_ISI180.wav');

const messages = defineMessages({
    question: {
        id: 'practice.question',
        defaultMessage: 'Left-to-right ({leftArrow}) OR right-to-left ({rightArrow})?'
    },
    playSound: {
        id: 'practice.playSound',
        defaultMessage: 'Play test trial'
    },
    start: {
        id: 'practice.startGame',
        defaultMessage: 'Start the game'
    }
});

const Practice: React.FC = () => {
    const [correctAnswer, setCorrectAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [showFeedback, setShowFeedback] = useState(false);

    const playTrial = () => {
        if (Math.random() > 0.5){
            setCorrectAnswer('ArrowRight');
            createSoundSample('right', 150);
        } else {
            setCorrectAnswer('ArrowLeft');
            createSoundSample('left', 150);
        }
        
    };

    useEffect(() => {
        const handleResponse = (event: KeyboardEvent) => {
            setIsCorrect(event.code === correctAnswer);
            setShowFeedback(true);
            setTimeout(() => setShowFeedback(false), 500);
        };
        document.addEventListener('keydown', handleResponse, false);
        return () => {
            document.removeEventListener('keydown', handleResponse, false);
        }
    },[correctAnswer]);
    

    return (
        <div className={styles.practice}>
            <h3 className={styles.question}>
                <FormattedMessage {...messages.question} 
                values={{leftArrow: <span className={styles.arrow}>&#8592;</span>, rightArrow: <span className={styles.arrow}>&#8594;</span>}}/>
            </h3>
            <button className={styles.trialBtn} onClick={playTrial}>
                <FormattedMessage {...messages.playSound}/>
            </button>
            <div className={styles.feedbackContainer}>
                {showFeedback && !isCorrect && <div className={styles.wrong}><span>&#x58;</span></div>} 
                {showFeedback && isCorrect && <div className={styles.correct}><span>&#x2713;</span></div>}
            </div>
            <Button width={'80%'} color={styles.info} ><FormattedMessage {...messages.start}/></Button>
        </div>
    );
};

export default Practice;