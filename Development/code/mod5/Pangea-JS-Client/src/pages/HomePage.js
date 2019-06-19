import React from 'react';
import styles from '../styling/homepage.module.css';


import { Link } from 'react-router-dom'

const HomePage = props =>
    <div>
        <h1 className={styles.welcome}>
            THE CONSERVATION CROWDFUNDING SITE
        </h1>
        <Link className='navigator-link' to='/signin'>Signin</Link> | <Link className='navigator-link' to='/signup'>Signup</Link>
        <div className={styles.container}>
            <img className={styles.image} src="https://www.nationalgeographic.com/content/dam/animals/rights-exempt/2019-travel-photo-contest/prod-yourshot-1791825--2-.jpg"> 
            </img>
        </div>
    </div>

export default HomePage