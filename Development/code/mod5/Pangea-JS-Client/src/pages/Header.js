import React from 'react';

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Header = props =>
    <header className='App-header'>
        <Link to='/'></Link>
        <h1 className='App-title'>
            {!props.username ? 'Welcome to Pangea' : `Welcome back, ${props.username}!`}
        </h1> 
        {props.username && <Button onClick={props.signout} variant='contained' color='primary'>SIGN OUT</Button>}
    </header>

export default Header