import { NavLink } from 'react-router-dom';

import styles from './ShortNav.module.scss';
import LanguageControlButton from '../LangControl/LanguageControlButtom';
import { languages } from '../../constants/constants';
import { useAppDispatch } from '../../hooks/storeManipulation';
import { useAppSelector } from '../../hooks/storeManipulation';
import { generalStateActions } from '../../store/index';
import { ReactComponent as HomeIcon } from '../../assets/svgs/iconfinder_216242_home_icon.svg';
import {ReactComponent as PlayIcon } from '../../assets/svgs/play.svg';
import {ReactComponent as TrophyIcon } from '../../assets/svgs/trophy.svg';

const ShortNav: React.FC = () => {

    const selectedLanguage = useAppSelector(state => state.general.selectedLanguage);
    const dispatch = useAppDispatch();

    const handleSelection = (lang: string) => {
        dispatch(generalStateActions.changeLanguage(lang));
    };

    return (
        <div className={styles.shortNav}>
            <div className={styles.navIcon}>
                <NavLink to="/navigation" activeClassName={styles.activeLink}>
                    <HomeIcon className={styles.homeIcon} />
                </NavLink>
            </div>
            <div className={styles.navIcon}>
                <NavLink to="/game" activeClassName={styles.activeLink}>
                    <PlayIcon className={styles.playIcon} />
                </NavLink>
            </div>
            <div className={styles.navIcon}>
                <NavLink to="/achievements" activeClassName={styles.activeLink}>
                    <TrophyIcon className={styles.trophyIcon} />
                </NavLink>
            </div>
            <div className={styles.langControl}>
                {languages.map(lang => {
                    if (lang === selectedLanguage) {
                        return <LanguageControlButton 
                        key={lang}
                        highlighted={true}
                        onClick={handleSelection.bind(null,lang)}
                        value={lang.toUpperCase()}/>;
                    } else {
                        return <LanguageControlButton 
                        key={lang}
                        highlighted={false}
                        onClick={handleSelection.bind(null, lang)}
                        value={lang.toUpperCase()}/>;
                    }
                })}
            </div>
        </div>
    );
};

export default ShortNav;