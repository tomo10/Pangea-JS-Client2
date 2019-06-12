import React from 'react'
import { Link } from 'react-router-dom'
import ProjectTile from '../components/ProjectTile'

class MyProjects extends React.Component {
   

    mapProjects = () => {
        return this.props.myprojects.map(project => 
        <div>
        <ProjectTile project={project} />
        </div>
        )
    }

    render() { 
        return ( 
            <div>
                <h1>MY PROJECTS</h1>
                <div className='wrapper'>
                {
                    this.mapProjects()
                }
                </div>
            </div>
         );
    }
}
 
export default MyProjects;