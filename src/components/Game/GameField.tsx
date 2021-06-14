import { Switch, Route, Redirect } from 'react-router-dom';

import styles from './GameField.module.scss';
import Navigation from '../pages/Navigation';
import Calibration from '../pages/Calibration';
import Instructions from '../pages/Instructions';
import About from '../pages/About';
import Achievements from '../pages/Achievements';
import Game from '../pages/Game';
import Practice from '../pages/Practice';

const GameField: React.FC = () => {
    return (
        <div className={styles.field}>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/navigation"/>
                </Route>
                <Route path="/navigation">
                    <Navigation />
                </Route>
                <Route path="/calibration">
                    <Calibration />
                </Route>
                <Route path="/instructions">
                    <Instructions />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/achievements">
                    <Achievements />
                </Route>
                <Route path="/practice">
                    <Practice />
                </Route>
                <Route path="/game">
                    <Game />
                </Route>
            </Switch>
        </div>
    );
}

export default GameField;