import React from 'react';
import StatItem from '../../../components/statItem';
import styles from './statsBar.css';

const StatsBar = () => {
    const stats = [{type:'60', value:'246'},{type:'60d', value:'250'}, {type:'75', value:'297'}, {type:'75d', value:'306'}, {type:'90d', value:'336'}, {type:'p100d', value:'376'}]
    return <div className= {styles.stats}>
        <ul>
            {stats.map(stat => <StatItem type={stat.type} value={stat.value} />)}
        </ul>
    </div>;
};
export default StatsBar;