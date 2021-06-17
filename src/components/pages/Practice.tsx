import { defineMessages, FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

import styles from './Practice.module.scss';
import useTOJtrial from '../../hooks/useTOJtrial';


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
    const {isCorrect, showFeedback, playTrial} = useTOJtrial();

    return (
        <div className={styles.practice}>
            <h3 className={styles.question}>
                <FormattedMessage {...messages.question} 
                values={{leftArrow: <span className={styles.arrow}>&#8592;</span>, rightArrow: <span className={styles.arrow}>&#8594;</span>}}/>
            </h3>
            <button className={styles.trialBtn} onClick={() => playTrial(150)}>
                <FormattedMessage {...messages.playSound}/>
            </button>
            <div className={styles.feedbackContainer}>
                {showFeedback && !isCorrect && <div className={styles.wrong}><span>&#x58;</span></div>} 
                {showFeedback && isCorrect && <div className={styles.correct}><span>&#x2713;</span></div>}
            </div>
            <Link to="/game" ><Button color={styles.info} ><FormattedMessage {...messages.start}/></Button></Link>
        </div>
    );
};

export default Practice;