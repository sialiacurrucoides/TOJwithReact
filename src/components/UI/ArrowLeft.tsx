import React from 'react';
import styles from './Arrow.module.scss';

const ArrowLeft: React.FC<{handleClick?: (event:React.MouseEvent) => void, activeArrow: string}> = ({handleClick, activeArrow}) => {
    return (
        <div 
        data-id='ArrowLeft'
        onClick={handleClick}
        className={activeArrow === 'ArrowLeft' ? `${styles.leftArrow} ${styles.activeArrow}` : styles.leftArrow}>
            <span data-id='ArrowLeft' className={styles.arrow}> &larr; </span>
        </div>
    );
};

export default ArrowLeft;