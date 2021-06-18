import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/storeManipulation';
import Button from '../UI/Button';
import ArrowLeft from '../UI/ArrowLeft';
import ArrowRight from '../UI/ArrowRight';

import styles from './Practice.module.scss';
import useTOJtrialMobile from '../../hooks/useTOJtrialMobile';
import isTouchDevice from '../../utils/isTouchDevice';
import { messages } from './Practice';

const isTouchable = isTouchDevice();

const Practice: React.FC = () => {
    const {isCorrect, showFeedback, playTrial, handleClick} = useTOJtrialMobile();
    const activeArrow = useAppSelector(state => state.general.activeArrow);

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
            {isTouchable && <div className={styles.controls}>
                <ArrowLeft activeArrow={activeArrow} handleClick={handleClick}/>
                <ArrowRight activeArrow={activeArrow} handleClick={handleClick}/>
                </div>}
        </div>
    );
};

export default Practice;