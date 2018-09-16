import React from 'react';
import Counter from '../../../../components/counter';
import Switch from '../../../../components/switch';
import styles from './climate.css';
import * as actions from '../../../../store/actions/actions';
import { connect } from 'react-redux';
import { getTemperature, getAC } from '../../../../store/reducers';

class Climate extends React.Component{
    render(){
        const { increaseTemperature, decreaseTemperature, toggleAC, temperatureValue, ac } = this.props;
        return <div className = {styles.container}>
            <Counter title = {'Outside Temperature'} 
                value = {temperatureValue} 
                symbol = '°'
                increase = {increaseTemperature}
                decrease = {decreaseTemperature}
            />
            <Switch active={ac} toggleSwitch = {toggleAC} heat = {temperatureValue<=10}/>
        </div>;
    }
}
const mapStateToProps = (state) => ({
    temperatureValue: getTemperature(state),
    ac: getAC(state)
});
export default connect(mapStateToProps,actions)(Climate);
