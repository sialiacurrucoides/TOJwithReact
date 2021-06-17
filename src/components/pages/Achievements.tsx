import { defineMessages, FormattedMessage } from 'react-intl';
import { useAppSelector } from '../../hooks/storeManipulation';
import styles from './Achievements.module.scss';
import { ReactComponent as ClockIcon } from '../../assets/svgs/clock.svg';
import { ReactComponent as ChartIcon } from '../../assets/svgs/chart_line_icon.svg';
import { ReactComponent as TrophyIcon } from '../../assets/svgs/trophy.svg';
import { referenceThreshold } from '../../constants/constants';

const messages = defineMessages({
    title: {
        id: 'achievements.title',
        defaultMessage: 'Achievements'
    },
    longest: {
        id: 'achievements.longestRun',
        defaultMessage: 'Your longest run was {clicks} responses.'
    },
    smallest: {
        id: 'achievements.smallestThreshold',
        defaultMessage: 'Your smallest threshold was {threshold} ms.'
    },
    better: {
        id: 'achievements.betterNr',
        defaultMessage: 'A better threshold than {reference} ms {times} times.'
    }
});

const Achievements: React.FC = () => {
    const longestRun = useAppSelector(state => state.general.longestRun);
    const smallestThreshold = useAppSelector(state => state.general.smallestThreshold);
    const betterTimes = useAppSelector(state => state.general.betterTimes);

    return (
        <div className={styles.achievements}>
            <div className={styles.title}><FormattedMessage {...messages.title}/></div>
            <div className={styles.dataBox}>
                <div className={styles.icon}><ClockIcon /></div>
                <p><FormattedMessage {...messages.longest} 
                values={{clicks: <span className={styles.highlighted}>{longestRun}</span>}}/></p>
            </div>
            <div className={styles.dataBox}>
                <div className={styles.icon}><TrophyIcon /></div>
                <p><FormattedMessage {...messages.smallest} 
                values={{threshold: <span className={styles.highlighted}>{smallestThreshold}</span>}}/></p>
            </div>
            <div className={styles.dataBox}>
                <div className={styles.icon}><ChartIcon /></div>
                <p><FormattedMessage {...messages.better} 
                values={{times: <span className={styles.highlighted}>{betterTimes}</span>, reference: referenceThreshold}}/></p>
            </div>
        </div>
    );
};

export default Achievements;