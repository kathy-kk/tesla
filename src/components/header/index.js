import React from 'react';
import { logo } from './images';
import styles from './header.css';


const Header = () => (
    <header className = {styles.header}>
        <img className = {styles.img} src={logo} />
    </header>
);
export default Header;
