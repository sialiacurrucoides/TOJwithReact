import styles from './Practice.module.scss';
import useTOJtrial from '../../hooks/useTOJtrial';
import PracticeContainer, { PracticeLink } from './PracticeContainer';


const Practice: React.FC = () => {
    const {isCorrect, showFeedback, playTrial} = useTOJtrial();

    return (
        <PracticeContainer playTrial={playTrial}>
            <div className={styles.feedbackContainer}>
                {showFeedback && !isCorrect && <div className={styles.wrong}><span>&#x58;</span></div>} 
                {showFeedback && isCorrect && <div className={styles.correct}><span>&#x2713;</span></div>}
            </div>
            <PracticeLink />
        </PracticeContainer>
    );
};

export default Practice;