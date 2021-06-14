import { Link } from 'react-router-dom';
import { defineMessages, FormattedMessage } from 'react-intl';

import Button from '../UI/Button';
import styles from './Navigation.module.scss';

const btnWidth = '12.25rem';

const messages = defineMessages({
    play: {
        id: 'button.play',
        defaultMessage: 'Play'
    },
    instructions: {
        id: 'button.instructions',
        defaultMessage: 'Instructions'
    },
    achievements: {
        id: 'button.achievements',
        defaultMessage: 'Achievements'
    },
    about: {
        id: 'button.about',
        defaultMessage: 'About us'
    }
});

const Navigation: React.FC = () => {
    return (
    <nav className={styles.navigation}>
        <Link to="/calibration">
            <Button width={btnWidth} color={styles.goGreen}>
                <FormattedMessage {...messages.play}/>
            </Button>
            </Link>
        <Link to="/instructions">
            <Button width={btnWidth} color={styles.red}>
                <FormattedMessage {...messages.instructions}/>
            </Button>
            </Link>
        <Link to="/achievements">
            <Button width={btnWidth} color={styles.orange}>
                <FormattedMessage {...messages.achievements}/>
            </Button>
            </Link>
        <Link to="/about">
            <Button width={btnWidth} color={styles.greyDark}>
                <FormattedMessage {...messages.about}/>
            </Button>
            </Link>
    </nav>);
};

export default Navigation;