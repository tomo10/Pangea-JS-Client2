import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom'
// withRouter is a HO component meaning it passes history, location, match to App which is needed to validate user in component did mount

import HomePage from './pages/HomePage'
import Header from './pages/Header'
import SignInForm from './pages/SignInForm'
import SignUpForm from './pages/SignUpForm'
import Projects from './pages/Projects'

import API from './API'

class App extends Component {

  state = {
    username: ''
  }

  signin = (username, token) => {
    localStorage.setItem('token', token)
    this.setState({username}, () => {
      this.props.history.push('/projects/all')
    })
  }

  signout = () => {
    this.setState({username: ''})
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  componentDidMount () {
    API.validate()
      .then(data => { 
        if (data.error) {
          this.props.history.push('/') //changed this from signin
        } else {
          this.signin(data.username, localStorage.getItem('token'))
          
        }
      })
  }
  
  //passing history, match, location to Inventory. 
  render() { 
    const {signin, signout} = this

    return ( 
      <div className='App'>
        <Header username={this.state.username} signout={signout}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/signup' component={props => <SignUpForm {...props} signin={signin} />}/>
          <Route path='/signin' component={props => <SignInForm {...props} signin={signin} />}/>
          <Route path='/projects' render={props => <Projects {...props} username={this.state.username} />}/> 
          <Route component={() => <h1>Page not found</h1>}/>
        </Switch>
      </div>
     );
  }
}
 
export default withRouter(App)

