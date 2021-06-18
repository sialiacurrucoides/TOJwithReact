import React from 'react';
import styles from './Arrow.module.scss';

const ArrowRight: React.FC<{handleClick?: (event:React.MouseEvent) => void, activeArrow: string}> = ({handleClick, activeArrow}) => {
    return (
        <div 
        data-id='ArrowRight'
        onClick={handleClick}
        className={activeArrow === 'ArrowRight' ? `${styles.rightArrow} ${styles.activeArrow}` : styles.rightArrow}>
            <span data-id='ArrowRight' className={styles.arrow}> &rarr; </span>
        </div>
    );
};

export default ArrowRight;