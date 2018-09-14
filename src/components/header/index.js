import React from 'react';
import styles from './header.css';


const Header = () => (
    <header className = {styles.header}>
        <img className = {styles.img} src='/assets/logo.svg' />
    </header>
);
export default Header;
