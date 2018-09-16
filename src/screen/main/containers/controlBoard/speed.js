import React from 'react';
import Counter from '../../../../components/counter';
import * as actions from '../../../../store/actions/actions';
import { connect } from 'react-redux';
import { getSpeed } from '../../../../store/reducers';

class Speed extends React.Component{
    render() {
        const title = 'Speed';
        const symbol = 'MPH';
        const { increaseSpeed, decreaseSpeed, speedValue } = this.props;
        return <Counter title = {title} symbol = {symbol} value = {speedValue}
            increase = {increaseSpeed} decrease = {decreaseSpeed}/>;
    }
}
const mapStateToProps = (state) => ({
    speedValue: getSpeed(state)
});
export default connect (mapStateToProps,actions)(Speed);