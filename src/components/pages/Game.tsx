import useTOJtrial from '../../hooks/useTOJtrial';
import GameMarkup from './GameMarkup';
import useProvideThreshold from '../../hooks/useProvideThreshold';

const Game: React.FC = () => {
    const {isCorrect, showFeedback, playTrial} = useTOJtrial();
    const { balloonLives, 
        fromBottom, 
        balloonToShow, 
        gameOn, handleStart, 
        activeArrow, 
        threshold} = useProvideThreshold(isCorrect, showFeedback, playTrial);

    return (
        <GameMarkup
            threshold={threshold} 
            gameOn={gameOn} 
            balloonToShow={balloonToShow} 
            handleStart={handleStart} 
            fromBottom={fromBottom} 
            activeArrow={activeArrow}
            balloonLives={balloonLives}
        ></GameMarkup>
    );
};

export default Game;