import React from 'react';
import styles from './stylesEggSpinner.module.css';

const EggSpinner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.egg}></div>
        </div>
    );
};

export default EggSpinner;