import React from 'react';
import API from '../API'
import { Link } from 'react-router-dom'
import styles from '../styling/signInUp.module.css';

import TextField from '@material-ui/core/TextField'

class SignInForm extends React.Component {
    state = {   
            username: '',
            password: '' 
        }

    handleSubmit = () => {
        API.signin(this.state)
            .then(data => {
                if (data.error) {
                    alert(`Didn't work: ${data.error}`)
                } else {
                    // user is authenticated
                    this.props.signin(this.state.username, data.token)
                }
            })
    }

    handleChange = event =>
        this.setState({ [event.target.name]: event.target.value })
    
    render() { 
        const { username, password } = this.state
        const { handleChange, handleSubmit } = this

        return ( 
            <div>
        <TextField
          id='usernameInput'
          label='Username'
          value={username}
          onChange={handleChange}
          margin='normal'
          name='username'
        />
        <br />
        <TextField
          id='passwordInput'
          label='Password'
          value={password}
          onChange={handleChange}
          margin='normal'
          name='password'
          type='password'
        />
        <br />
        <div className={styles.buttonContainer}>
        <Link className='navigator-link' onClick={handleSubmit}>Signin</Link>
        </div>    
            
      </div>
         );
    }
}
 
export default SignInForm;