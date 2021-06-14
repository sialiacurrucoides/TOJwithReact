import { defineMessages, FormattedMessage } from 'react-intl';
import styles from './Instructions.module.scss';
import BalloonIcon from '../../assets/imgs/juli_jatek_lufi_GO.png';

const messages = defineMessages({
    title: {
        id: 'button.instructions',
        defaultMessage: 'Instructions'
    },
    paragraph1: {
        id: 'instructions.para1',
        defaultMessage: 'Press {leftArrow} when you hear the sound propagating from left to right.'
    },
    paragraph2: {
        id: 'instructions.para2',
        defaultMessage: 'Press {rightArrow} when you hear the sound propagating from right to left.'
    },
    paragraph3: {
        id: 'instructions.para3',
        defaultMessage: 'One round is over after 8 errors.'
    },
    paragraph4: {
        id: 'instructions.para4',
        defaultMessage: 'You can start the game by clicking the balloon in the middle of the screen.'
    }
});

const Instructions: React.FC = () => {
    return (
        <div className={styles.instructions}>
            <div className={styles.title}><FormattedMessage {...messages.title}/></div>
            <div className={styles.textBox}>
                <p><FormattedMessage {...messages.paragraph1} 
                values={{leftArrow: <span className={styles.arrow}>&#8592;</span>}}/></p>
                <p><FormattedMessage {...messages.paragraph2} 
                values={{rightArrow: <span className={styles.arrow}>&#8594;</span>}}/></p>
                <p><FormattedMessage {...messages.paragraph3}/></p>
                <p><FormattedMessage {...messages.paragraph4}/></p>
                <img src={BalloonIcon} alt="ballon icon"/>
                
            </div>
        </div>
    );
};

export default Instructions;