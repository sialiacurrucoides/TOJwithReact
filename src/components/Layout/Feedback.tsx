import { useHistory } from 'react-router';
import { defineMessages, FormattedMessage } from 'react-intl';
import styles from './Feedback.module.scss';
import Button from '../UI/Button';

const messages = defineMessages({
    feedback: {
        id: 'feedback',
        defaultMessage: 'Your threshold is {threshold} ms'
    },
    again: {
        id: 'feedback.again',
        defaultMessage: 'Try again?'
    }
});

const Feedback: React.FC<{threshold: number}> = ({threshold}) => {
    const history = useHistory();

    const handleClick = () => {
        history.go(0);
    };

    return (
        <div className={styles.backdrop}>
            <div className={styles.feedbackModal}>
                <FormattedMessage {...messages.feedback} values={{threshold: threshold}}/>
                    <Button color={styles.info} width="100%" onClick={handleClick}>
                        <FormattedMessage {...messages.again}/>
                    </Button>
            </div>
        </div>
    );
};

export default Feedback;