import { Link } from 'react-router-dom';

import Button from '../UI/Button';
import styles from './Navigation.module.scss';

const btnWidth = '12.25rem';

const Navigation: React.FC = () => {
    return (
    <nav className={styles.navigation}>
        <Link to="/calibration"><Button title="play" width={btnWidth} color={styles.goGreen}/></Link>
        <Link to="/instructions"><Button title="instructions" width={btnWidth} color={styles.red}/></Link>
        <Link to="/achievements"><Button title="achievements" width={btnWidth} color={styles.orange}/></Link>
        <Link to="/about"><Button title="about us" width={btnWidth} color={styles.grey}/></Link>
    </nav>);
};

export default Navigation;