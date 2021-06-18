import { defineMessages, FormattedMessage } from 'react-intl';

import styles from './About.module.scss';

const messages = defineMessages({
    title: {
        id: 'about.title',
        defaultMessage: 'About us'
    },
    paragraph1: {
        id: 'about.para1',
        defaultMessage: 'The author (J.S.) conducted research on the Temporal Order Judgment task. More details about the task can be found following this {link}.'
    },
    paragraph2: {
        id: 'about.para2',
        defaultMessage: 'Many thanks to Ágnes K. Szerafin ( {homepage} ) for the design.'
    }
});

const About: React.FC = () => {
    return (
    <div className={styles.about}>
        <div className={styles.title}><FormattedMessage {...messages.title}/></div>
        <div className={styles.textBox}>
            <p><FormattedMessage {...messages.paragraph1} 
            values={{link: <a href="https://link.springer.com/article/10.1007/s00221-019-05712-x" target="_blank" rel="noopener noreferrer">
                    <span className={styles.highlighted}>link</span>
                </a>}}/>
            </p>
            <p><FormattedMessage {...messages.paragraph2} 
            values={{homepage: <a href="https://agnesszerafin.com/" target="_blank" rel="noopener noreferrer">
                    <span className={styles.highlighted}>home page</span>
                </a>}}/>
            </p>
        </div>
    </div>);
};

export default About;