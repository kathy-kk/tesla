import React from 'react';
import Counter from '../../../../components/counter';
import Switch from '../../../../components/switch';
import styles from './climate.css';

class Climate extends React.Component{
    render(){
        return <div className = {styles.container}>
            <Counter title = {'Outside Temperature'} value = {40} symbol = '°'/>
            <Switch active={true}/>
        </div>;
    }
}
export default Climate;
