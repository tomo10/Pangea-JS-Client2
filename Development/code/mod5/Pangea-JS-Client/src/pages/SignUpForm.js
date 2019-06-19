import React from 'react';
import API from '../API'
import { Link } from 'react-router-dom'
import styles from '../styling/signInUp.module.css';

import TextField from '@material-ui/core/TextField'


class SignUpForm extends React.Component {
    state = { first_name: '',
            last_name: '',
            username: '',
            password: '' 
        }

    handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

    handleSubmit = () => {
        API.signup(this.state)
            .then(data => { 
                if (data.error) {
                    alert(`Didn't work: ${data.error}`)
                } else {
                    this.props.signin(this.state.username, data.token)
                }
            })
    }

    render() { 
        const { username, password, first_name, last_name } = this.state
        const { handleChange, handleSubmit } = this

        return ( 
            <div>
            <TextField
          id='firstNameInput'
          label='First Name'
          value={first_name}
          onChange={handleChange}
          margin='normal'
          name='first_name'
        />
        <br />
        <TextField
          id='lastNameInput'
          label='Last Name'
          value={last_name}
          onChange={handleChange}
          margin='normal'
          name='last_name'
        />
        <br />
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
        <Link className='navigator-link' onClick={handleSubmit}>Signup</Link>
        </div>

        {/* <Button onClick={handleSubmit} variant='contained' color='primary'>
          SUBMIT
        </Button> */}
      </div>
         );
    }
}
 
export default SignUpForm;