import React from 'react';
import API from '../API'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          LOGIN
        </Button>
      </div>
         );
    }
}
 
export default SignInForm;