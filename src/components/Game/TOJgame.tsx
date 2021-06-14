import GameContainer from "../Layout/GameContainer";
import ShortNav from "../ShortNav/ShortNav";
import GameField from "./GameField";

const TOJgame: React.FC = () => {
    return (
    <GameContainer>
        <GameField />
        <ShortNav />
    </GameContainer>);
};

export default TOJgame;