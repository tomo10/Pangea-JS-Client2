import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import Button from '@material-ui/core/Button'
import API from '../API';

class CreateProject extends Component {
    
    state = { name: '',
              description: '',
              funding_required: 0,
              amount_pledged: 0,
              image: '',
              user_id: 0,
              slug: ''  
            }

    handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })


    createSlug = () => {
        let newSlug = this.state.name.toLowerCase().split(' ').join('-')
        this.setState( { slug: newSlug } )
    }

    handleSubmit = () => {
        this.createSlug()
         
        API.validate()
        .then(data => {
            this.setState({ user_id: data.user_id })
        }).then(() => {
            debugger  
            API.createProject(this.state) 
            }
            )
    }


    render() { 

        const { name, description, funding_required, image } = this.state
        return ( 

        <div>
            <br />
            <TextField
            id="nameInput"
            label="Project Name"
            value={name}
            onChange={this.handleChange}
            margin="normal"
            name='name'
            />
            <br />
            <br />

            <TextField
            id="imageInput"
            label="Image URL"
            value={image}
            onChange={this.handleChange}
            margin="normal"
            name='image'
            />
            <br />
            <br />
            <br />

            <InputLabel htmlFor="adornment-amount">Funding Required</InputLabel>
            <Input
            id="adornment-amount"
            value={funding_required}
            onChange={this.handleChange}
            name='funding_required'
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
            <br />
            <br />

            <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            rowsMax="4"
            value={description}
            onChange={this.handleChange}
            margin="normal"
            name='description'
            />
            <br />
            <Button onClick={this.handleSubmit} variant='contained' color='primary'>
                SUBMIT
            </Button>

        </div>
        );
    }
}
 
export default CreateProject;

