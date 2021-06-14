import { Link } from 'react-router-dom';
import { defineMessages, FormattedMessage } from 'react-intl';

import styles from './Calibration.module.scss';
import RubbingHands  from '../../assets/imgs/rub-hands.webp';
import Button from '../UI/Button';

const rubbingHands = new Audio('sounds/rubbing_hands_sample.wav');

const messages = defineMessages({
    title: {
        id: 'calibration.title',
        defaultMessage: 'Before you start'
    },
    paragraph1: {
        id: 'calibration.para1',
        defaultMessage: 'You have to calibrate the sound level to get more reliable measures.'
    },
    paragraph2: {
        id: 'calibration.para2',
        defaultMessage: 'Rub your palms together quickly and firmly and set the loudness level of your headphone to a level so the sample sound matches the loudness of the sound of your hands.'
    },
    paragraph3: {
        id: 'calibration.para3',
        defaultMessage: 'Click to the hands for the reference sound!'
    }
});

const Calibration: React.FC = () => {

    const playSound = () => {
        rubbingHands.play();
    }

    return (
        <div className={styles.calibration}>
            <div className={styles.title}><FormattedMessage {...messages.title}/></div>
            <div className={styles.textBox}>
                <p><FormattedMessage {...messages.paragraph1}/></p>
                <p><FormattedMessage {...messages.paragraph2}/></p>
                <div className={styles.lastParagraph}>
                    <img 
                    src={RubbingHands} 
                    alt="rubbing hand sounds" 
                    onClick={playSound}
                    height="40px" width="59px"/>
                    <p><FormattedMessage {...messages.paragraph3}/></p>
                </div>
            </div>
            <Link to="/practice">
                <Button color={styles.red} width="100%">Ready</Button>
            </Link>
        </div>
    );
};

export default Calibration;