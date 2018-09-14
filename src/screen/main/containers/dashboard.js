import React from 'react';
import styles from './dashboard.css';
import Car from '../../../components/car';
import StatsBar from './statsBar';

const Dashboard = () => (
    <div className = {styles.wrapper}>
        <form>
            <h1 className = {styles.title}>Range Per Charge</h1>
            <Car />
            <StatsBar />
        </form>
    </div>
);
export default Dashboard;