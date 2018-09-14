import React from 'react';
import styles from './car.css';

const Car = () => (
    <div className = {styles.car}>
        <div className = {styles.wheels}>
            <div className = {[styles.wheel, styles.front, styles.run].join(' ')}></div>
            <div className = {[styles.wheel, styles.rear, styles.run].join(' ')}></div>
        </div>
    </div>
);
export default Car;