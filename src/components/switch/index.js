import React from 'react';
import styles from './switch.css';

const Switch = ({active}) => {
    const labelStyle = [styles.item, styles[active?'item-on':'item-off']].join(' ');
    const iconStyle = [styles.icon, styles[active?'icon-on':'icon-off']].join(' ');

    return <div className = {styles.container}>
        <label className = {labelStyle}>
            <p className = {styles['switch-label']}>AC {active?'ON':'OFF'} </p>
            <i className = {iconStyle}></i>
            <input className = {styles['switch-input']}/>
        </label>
    </div>;
};
export default Switch;
