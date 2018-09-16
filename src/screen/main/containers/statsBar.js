import React from 'react';
import StatItem from '../../../components/statItem';
import styles from './statsBar.css';
import { connect } from 'react-redux';
import { getData, getAC, getTemperature, getSpeed ,getWheels } from '../../../store/reducers';

class StatsBar extends React.Component {

    render(){
        const {data, ac, temperature, speed, wheels} = this.props;
        const stats = Object.keys(data).map((type) => {
            return { type, value:data[type][wheels][ac?'on':'off'].speed[speed][temperature]};
        });
        return <div className= {styles.stats}>
            <ul>
                {stats.map(stat => <StatItem key = {stat.type}  type={stat.type} value={stat.value} />)}
            </ul>
        </div>;
    }
}
const mapStateToProps = (state ) => ({
    data: getData(state),
    ac: getAC(state),
    temperature: getTemperature(state),
    speed: getSpeed(state),
    wheels: getWheels(state)
});
export default connect(mapStateToProps, null)(StatsBar);