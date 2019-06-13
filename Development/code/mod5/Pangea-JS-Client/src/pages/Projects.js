import React, { Component } from 'react';
import API from '../API'
import AllProjects from './AllProjects'
import MyProjects from './MyProjects'
import CreateProject from './CreateProject'

import ProjectDetailView from '../components/ProjectDetailView'
import { Link, Route, Switch } from 'react-router-dom'


class Projects extends Component {
    
    state = { UserProjects: [],
              allProjects: [],
              searchTerm: ''
            }


    // if there is no username in state, push them back to signin so can't see Inventory
    componentDidMount () {
        if (!this.props.username) {
            this.props.history.push('/signin')
        } else {
            API.getUserProjects()
                .then(UserProjects => this.setState( {UserProjects} ))
        }

        API.getAllProjects()
          .then(allProjects => {
            this.setState( {allProjects} )
          })
    }

    handleDonationServer = (e, project) => {
      e.preventDefault()
      
      let newDonationValue = parseInt(e.target.donation.value) + project.amount_pledged
    
      // donation sent to server
      API.increaseDonationServer(newDonationValue, project)
        .then(() => this.handleDonation(newDonationValue, project))
    }

    handleDonation = (newDonationValue, targetProject) => {   
         
      const allProjects = this.state.allProjects.map(project =>
        project.id === targetProject.id
          ? {...project, amount_pledged: newDonationValue}
          : project
      )

      const foundProject = allProjects.find(project => project.id === targetProject.id)

      this.setState({ allProjects })

      // sends to server 
      API.validate()
      .then(data => {
        API.createUserProject(data.user_id, foundProject.id)
      })

      //adds to UserProjects in state
      this.addToUserProjects(foundProject)
    }

    addToUserProjects = (newProj) => {
        // if (!this.state.UserProjects.includes(newProj)) {
          this.setState({ UserProjects: [...this.state.UserProjects, newProj] })
        // }
        // else (alert("This project is already in your donated projects list"))
    }

    getSearchTerm = (event) => {
      this.setState( {searchTerm: event.target.value} )
    }

    clearSearchTerm = () => {

    }

    filterProjects = () => {
      return this.state.allProjects.filter(project => 
        project.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
    }

    render() { 
        const { UserProjects, allProjects } = this.state

        return (
          <div>
            <br></br>
            <br></br> 
            <Link className='detail-link' to='/projects/all'>ALL PROJECTS</Link> | <Link className='detail-link' to='/projects/backed'>MY PROJECTS</Link> | <Link className='detail-link' to='/projects/create'>CREATE PROJECT</Link>         
            <br></br>
            <Switch>
              <Route path='/projects/all' render={props =>
                <AllProjects
                  {...props}
                  handleSearch={this.getSearchTerm}
                  allprojects={this.filterProjects()}
                />
              } />
              <Route path='/projects/backed' render={props =>
                <MyProjects
                  {...props}
                  myprojects={UserProjects}
                />
              } />
              <Route path='/projects/create' component={props =>
                <CreateProject
                  {...props}
                  
                />
              } />
              <Route path='/projects/:slug' render={props => {
                const project = this.state.allProjects.find(project => project.slug === props.match.params.slug)
                return <ProjectDetailView
                  {...props}
                  project={project}
                  projects={this.state.allProjects}
                  handleDonationServer={this.handleDonationServer} 
                />
              }} />
            </Switch>
            <br />
          </div>
        );
    }
  }
 
export default Projects;
 
