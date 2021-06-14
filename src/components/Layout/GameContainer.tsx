import styles from './GameContainer.module.scss';

const GameContainer: React.FC = ({children}) => {
    return <div className={styles.container}>{children}</div>;
}

export default GameContainer;