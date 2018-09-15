import React from 'react';
import styles from './dashboard.css';
import Car from '../../../components/car';
import StatsBar from './statsBar';
import ControlBoard from './controlBoard';
import Notice from '../../../components/notice';


const Dashboard = () => (
    <div className = {styles.wrapper}>
        <form className = {styles.container}>
            <h1 className = {styles.title}>Range Per Charge</h1>
            <Car />
            <StatsBar />
            <ControlBoard />
            <Notice />
        </form>
    </div>
);
export default Dashboard;