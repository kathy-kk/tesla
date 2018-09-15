import React from 'react';
import styles from './wheels.css';

class Wheels extends React.Component{
    render(){
        return <div className = {styles.container}>
            <p className = {styles.title}>Wheels</p>
            <div className = {styles['wheels-container']}>
                <label className = {[styles['wheel-item'], styles['wheel-item-19']].join(' ')}>
                    <input className = {styles['wheel-input']} type = 'radio' value = '19'/>
                    <p className = {styles.value}>19"</p>
                </label>
                <label className = {[styles['wheel-item'], styles['wheel-item-21']].join(' ')}>
                    <input className = {styles['wheel-input']} type = 'radio' value = '21'/>
                    <p className = {styles.value}>21"</p>
                </label>
            </div>
        </div>;
    }
}
export default Wheels;