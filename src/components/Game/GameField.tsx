import { Switch, Route, Redirect } from 'react-router-dom';

import styles from './GameField.module.scss';
import Navigation from '../pages/Navigation';
import Calibration from '../pages/Calibration';
import Instructions from '../pages/Instructions';
import About from '../pages/About';
import Achievements from '../pages/Achievements';
import Game from '../pages/Game';
import GameMobile from '../pages/GameMobile';
import Practice from '../pages/Practice';
import PracticeMobile from '../pages/PracticeMobile';
import isTouchDevice from '../../utils/isTouchDevice';

const isTouchable = isTouchDevice();

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
                    {!isTouchable ? <Practice /> : <PracticeMobile />}
                </Route>
                <Route path="/game">
                    {!isTouchable ? <Game /> : <GameMobile />}
                </Route>
            </Switch>
        </div>
    );
}

export default GameField;