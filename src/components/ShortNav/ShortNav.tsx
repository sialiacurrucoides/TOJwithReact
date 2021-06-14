import { Link } from 'react-router-dom';

import styles from './ShortNav.module.scss';
import LanguageControlButton from '../LangControl/LanguageControlButtom';
import { languages } from '../../constants/constants';
import { useAppDispatch } from '../../hooks/storeManipulation';
import { useAppSelector } from '../../hooks/storeManipulation';
import { generalStateActions } from '../../store/index';
import { ReactComponent as HomeIcon } from '../../assets/svgs/iconfinder_216242_home_icon.svg';

const ShortNav: React.FC = () => {

    const selectedLanguage = useAppSelector(state => state.general.selectedLanguage);
    const dispatch = useAppDispatch();

    const handleSelection = (lang: string) => {
        dispatch(generalStateActions.changeLanguage(lang));
    };

    return (
        <div className={styles.shortNav}>
            <div className={styles.home}>
                <Link to="/navigation"><HomeIcon className={styles.homeIcon} /></Link>
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