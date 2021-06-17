import styles from './Button.module.scss';

const Button: React.FC<{
    color?: string,
    width?: string,
    onClick?: () => void
}> = ({children, color = "#888888", width, onClick}) => {
    return (
        <button 
        style={{backgroundColor: color, width: width}}
        className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;