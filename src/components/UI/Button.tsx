import styles from './Button.module.scss';

const Button: React.FC<{title: string, 
    color?: string,
    width?: string
}> = ({title, color = "#888888", width}) => {
    return (
        <button 
        style={{backgroundColor: color, width: width}}
        className={styles.button}>
            {title}
        </button>
    );
};

export default Button;