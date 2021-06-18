import { Link } from 'react-router-dom';
import { defineMessages, FormattedMessage } from 'react-intl';
import styles from './Practice.module.scss';
import Button from '../UI/Button';

export const messages = defineMessages({
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

const PracticeContainer: React.FC<{playTrial: (isi: number) => void}> = ({children, playTrial}) => {
    return (
        <div className={styles.practice}>
            <h3 className={styles.question}>
                <FormattedMessage {...messages.question} 
                values={{leftArrow: <span className={styles.arrow}>&#8592;</span>, rightArrow: <span className={styles.arrow}>&#8594;</span>}}/>
            </h3>
            <button className={styles.trialBtn} onClick={() => playTrial(150)}>
                <FormattedMessage {...messages.playSound}/>
            </button>
            {children}
        </div>
    );
};

export const PracticeLink: React.FC = () => {
    return (<Link to="/game" ><Button color={styles.info} ><FormattedMessage {...messages.start}/></Button></Link>);
}

export default PracticeContainer;

