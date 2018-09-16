import React from 'react';
import styles from './counter.css';

const Counter = ({title, value, symbol, increase, decrease}) => {
    return <div className = {styles.counter}>
        <p className = {styles.title}>{title}</p>
        <div className = {styles.container}>
            <div className = {styles.item}>
                <p className = {styles.value} >{value}
                    <span className = {styles.symbol}>{symbol}</span>
                </p>
                 
                <div className = {styles.buttons}>
                    <button onClick = {(e) => { e.preventDefault();increase();} } className = {[styles['counter-button'], styles['button-up']].join(' ')}></button>
                    <button onClick = {(e) => { e.preventDefault();decrease();}} className = {[styles['counter-button'], styles['button-down']].join(' ')}></button>
                </div>

            </div>
        </div>
    </div>;
};

export default Counter;