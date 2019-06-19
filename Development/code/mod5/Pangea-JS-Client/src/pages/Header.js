import React from 'react';
import styles from '../styling/header.module.css';

import { Link } from 'react-router-dom'


const Header = props =>
    <header className='App-header'>
        <Link to='/'></Link>
        <h1 className={styles.welcome}>
            Welcome to Pangea
        </h1> 
        {props.username && <Link className={styles.navigatorLink} onClick={props.signout}>SIGN OUT</Link>}
    </header>

export default Header

// {!props.username ? 'Welcome to Pangea' : `Welcome back, ${props.username}!`}