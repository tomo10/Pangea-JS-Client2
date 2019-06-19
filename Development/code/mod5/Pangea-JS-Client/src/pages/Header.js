import React from 'react';
import styles from '../styling/header.module.css';
import logo from '../images/Original.png';

import { Link } from 'react-router-dom'


const Header = props =>
    <header className='App-header'>
        <img className={styles.logo} alt='logo' src={logo}></img>
        <Link to='/'></Link>
        <h1 className={styles.welcome}>
            Welcome to Pangea
        </h1> 
        {props.username && <Link className={styles.navigatorLink} onClick={props.signout}>SIGN OUT</Link>}
    </header>

export default Header

// {!props.username ? 'Welcome to Pangea' : `Welcome back, ${props.username}!`}