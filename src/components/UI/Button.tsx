import styles from './Button.module.scss';

const Button: React.FC<{
    color?: string,
    width?: string
}> = ({children, color = "#888888", width}) => {
    return (
        <button 
        style={{backgroundColor: color, width: width}}
        className={styles.button}>
            {children}
        </button>
    );
};

export default Button;