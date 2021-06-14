import styles from './LanguageControlButton.module.scss';

const LanguageControlButton: React.FC<{
    value: string, 
    highlighted: boolean,
    onClick: () => void
    }> = ({value, onClick, highlighted = false}) => {
    return (
        <button 
        onClick={onClick}
        className={highlighted ? `${styles.button} ${styles.highlighted}` : styles.button}>
            {value}
        </button>
    );
};

export default LanguageControlButton;