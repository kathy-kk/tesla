import React from 'react';
import styles from './wheels.css';
import * as actions from '../../../../store/actions/actions';
import { connect } from 'react-redux';
import { getWheels } from '../../../../store/reducers';

class Wheels extends React.Component{
    render(){
        const { wheels, changeWheels } = this.props;
        return <div className = {styles.container}>
            <p className = {styles.title}>Wheels</p>
            <div className = {styles['wheels-container']}>
                <label className = {[styles['wheel-item'], styles['wheel-item-19']].concat(wheels == '19'?styles['wheel-item-active']:'').join(' ')}>
                    <button onClick = {(e) => {e.preventDefault(); changeWheels('19'); }} className = {styles['wheel-input']} type = 'radio' value = '19'/>
                    <p className = {styles.value}>19"</p>
                </label>
                <label className = {[styles['wheel-item'], styles['wheel-item-21']].concat(wheels == '21'?styles['wheel-item-active']:'').join(' ')}>
                    <button onClick = {(e) => {e.preventDefault(); changeWheels('21');}} className = {styles['wheel-input']} type = 'radio' value = '21'/>
                    <p className = {styles.value}>21"</p>
                </label>
            </div>
        </div>;
    }
}
const mapStateToProps = state => ({
    wheels: getWheels(state)
});
export default connect(mapStateToProps, actions)(Wheels);