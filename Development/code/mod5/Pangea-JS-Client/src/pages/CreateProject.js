import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link } from 'react-router-dom'
import styles from '../styling/createProject.module.css';
import logo from '../images/MonochromeTransparent.png';


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
                    API.createProject(this.state) 
                })
    }


    render() { 

        const { name, description, funding_required, image } = this.state
        return ( 
        
        <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
        <img className={styles.logo} alt='logo' src={logo}></img>
            <div className={styles.box}>
                <TextField
                id="nameInput"
                label="Project Name"
                value={name}
                onChange={this.handleChange}
                margin="normal"
                name='name'
                />
            </div>

            <div className={styles.box}>
            <TextField
                id="imageInput"
                label="Image URL"
                value={image}
                onChange={this.handleChange}
                margin="normal"
                name='image'
                />
            </div>
            <div className={styles.submit}>
                <InputLabel htmlFor="adornment-amount">Funding Required</InputLabel>
                <Input
                id="adornment-amount"
                value={funding_required}
                onChange={this.handleChange}
                name='funding_required'
                startAdornment={<InputAdornment position="start">£</InputAdornment>}
                />
            </div>
            <div className={styles.box}>
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
            </div>
            
            <div className={styles.submit}>
                <Link className='navigator-link' onClick={this.handleSubmit}>SUBMIT FORM</Link>
            </div>

        </div>
        </div>
        );
    }
}
 
export default CreateProject;

