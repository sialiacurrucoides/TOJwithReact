import { useAppSelector } from '../../hooks/storeManipulation';
import ArrowLeft from '../UI/ArrowLeft';
import ArrowRight from '../UI/ArrowRight';

import styles from './Practice.module.scss';
import useTOJtrialMobile from '../../hooks/useTOJtrialMobile';
import PracticeContainer, { PracticeLink } from './PracticeContainer';
import isTouchDevice from '../../utils/isTouchDevice';

const isTouchable = isTouchDevice();

const Practice: React.FC = () => {
    const {isCorrect, showFeedback, playTrial, handleClick} = useTOJtrialMobile();
    const activeArrow = useAppSelector(state => state.general.activeArrow);

    return (
        <PracticeContainer playTrial={playTrial}>
            <div className={styles.feedbackContainer}>
                {showFeedback && !isCorrect && <div className={styles.wrong}><span>&#x58;</span></div>} 
                {showFeedback && isCorrect && <div className={styles.correct}><span>&#x2713;</span></div>}
            </div>
            <PracticeLink />
            {isTouchable && <div className={styles.controls}>
                <ArrowLeft activeArrow={activeArrow} handleClick={handleClick}/>
                <ArrowRight activeArrow={activeArrow} handleClick={handleClick}/>
                </div>}
        </PracticeContainer>
    );
};

export default Practice;