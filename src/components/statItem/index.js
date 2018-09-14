import React from 'react';
import styles from './statItem.css';

const StatItem = ({type, value}) => {
    const iconImage = `icon-${type}`;
    return <li className = {styles.item}>
        <div className = {[styles.icon, styles[iconImage]].join(' ')}></div>
        <p className = {styles.value} >{value}</p>
    </li>;
};
export default StatItem;