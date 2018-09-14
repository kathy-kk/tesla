import React from 'react';
import Header from '../../components/header';
import Dashboard from './containers/dashboard';
import '../../root.css';

const MainScreen = () => (
    <div>
        <Header />
        <Dashboard />
    </div>
);
export default MainScreen;