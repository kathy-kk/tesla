import React from 'react';
import styles from './switch.css';

const Switch = ({active, toggleSwitch, heat}) => {
    const label = heat?'heat':'ac';
    const labelStyle = [styles.item, styles[active?`item-${label}-on`:`item-${label}-off`]].join(' ');
    const iconStyle = [styles.icon, styles[active?`icon-${label}-on`:`icon-${label}-off`]].join(' ');
    return <div className = {styles.container}>
        <label className = {labelStyle}>
            <p className = {styles['switch-label']}>{heat? 'HEAT':'AC'} {active?'ON':'OFF'} </p>
            <i className = {iconStyle}></i>
            <button onClick = {(e) => { e.preventDefault(); toggleSwitch(); }}  className = {styles['switch-input']}/>
        </label>
    </div>;
};
export default Switch;
