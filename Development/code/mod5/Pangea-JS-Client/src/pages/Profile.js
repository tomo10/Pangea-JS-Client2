import React, { Component } from 'react';
import API from '../API'
import { Link } from 'react-router-dom'


class Profile extends Component {
    state = {  }
    
    render() { 
        return ( <div>
            <Link className='detail-link' to='/projects/all'>ALL PROJECTS</Link> | <Link className='detail-link' to='/projects/backed'>MY PROJECTS</Link> | <Link className='detail-link' to='/projects/create'>CREATE PROJECT</Link>
            <h1>This is a snapshot of you information:</h1>
            <h2>You are currently supporting x Conservation projects</h2>
        </div> );
    }
}
 
export default Profile;
