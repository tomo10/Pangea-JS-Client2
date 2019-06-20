import React, { Component } from 'react';
import API from '../API'
import AllProjects from './AllProjects'
import MyProjects from './MyProjects'
import CreateProject from './CreateProject'
import Dashboard from './Dashboard'

import ProjectDetailView from '../components/ProjectDetailView'
import { Link, Route, Switch } from 'react-router-dom'


class Projects extends Component {
    
    state = { 
              userProjects: [],
              allProjects: [],
              watchList: [],
              searchTerm: ''
            }


    // if there is no username in state, push them back to signin so can't see Inventory
    componentDidMount () {
        if (!this.props.username) {
            this.props.history.push('/signin')
        } else {
            API.getUserProjects()
                .then(userProjects => {
                this.setState( { userProjects: userProjects.parsed_donations } )
              })
        }

        API.getAllProjects()
          .then(allProjects => {
            this.setState( {allProjects} )
          })

        API.getWatchedProjects()
          .then(watchList => {
            this.setState( {watchList} )
          })

    }

    handleDonationServer = (e, project) => {
      e.preventDefault()
      
      let marginalDonation = parseInt(e.target.donation.value)
      let newDonationValue = marginalDonation + project.amount_pledged
    
      // donation sent to server
      API.increaseDonationServer(newDonationValue, project)
        .then(() => this.handleDonationClient(newDonationValue, project, marginalDonation))
    }

    handleDonationClient = (newDonationValue, targetProject, marginalDonation) => {   
         
      const allProjects = this.state.allProjects.map(project =>
        project.id === targetProject.id
          ? {...project, amount_pledged: newDonationValue}
          : project
      )
      //this found Project will have updated donation amount
      const foundProject = allProjects.find(project => project.id === targetProject.id)

      this.setState({ allProjects })

      // Add to User Projects via server sends to server 
      API.validate()
      .then(data => {
        API.createUserProject(marginalDonation, data.user_id, foundProject.id)
        .then(() => API.getUserProjects())
        .then(donations => this.setState({userProjects: donations.parsed_donations})
      )})
      
      
      //adds to UserProjects in state 
      // this.addToUserProjects(foundProject)
    }

    // addToUserProjects = (newProj) => {
    //     if (!this.state.userProjects.map(proj => proj.id).includes(newProj.id)) {
    //       this.setState({ userProjects: [...this.state.userProjects, newProj] })
    //     }
    //     else (alert("Project already in your donations list. Donation amount added to your dashboard total"))
    // }

    addToWatchList = (watchedProject) => { 
        if (this.state.watchList.includes(obj => obj.id === watchedProject.id)) {
        //   this.setState( { watchList: [...this.state.watchList, watchedProject] })
          //send to server 
          API.validate()
          .then(data => {
            API.createWatchedProject(data.user_id, watchedProject.id)
            .then(() => API.getWatchedProjects())
            .then(watched => this.setState({watchList: watched}))  
          })}
          else (alert("This project is already on your watch list."))
        }
   
    
    getSearchTerm = (event) => {
      this.setState( {searchTerm: event.target.value} )
    }

    clearSearchTerm = () => {
      this.setState({searchTerm: ''})
    }

    filterProjects = () => {
      return this.state.allProjects.filter(project => 
        project.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
    }

    render() { 
        const { userProjects, watchList, allProjects } = this.state

        return (
          <div>
            <br></br>
            <br></br> 
            <Link onClick={() => this.clearSearchTerm()} className='navigator-link' to='/projects/all'>ALL PROJECTS</Link>  |  <Link className='navigator-link' to='/projects/backed'>MY DONATIONS</Link>  |  <Link className='navigator-link' to='/projects/create'>CREATE PROJECT</Link>  |  <Link className='navigator-link' to='/projects/dashboard'>DASHBOARD</Link>         
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
                  myprojects={userProjects}
                />
              } />
              <Route path='/projects/create' render={props =>
                <CreateProject
                  {...props}
                />
              } />
              <Route path='/projects/dashboard' render={props => 
                <Dashboard 
                  {...props}
                  watchList={watchList}
                  myprojects={userProjects}
                  allProjects={allProjects}
                />
              } />
              <Route path='/projects/:slug' render={props => {
                const project = this.state.allProjects.find(project => project.slug === props.match.params.slug)
                return <ProjectDetailView
                  {...props}
                  addToWatchList={this.addToWatchList}
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
 
