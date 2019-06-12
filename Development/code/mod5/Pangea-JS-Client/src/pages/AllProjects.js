import React from 'react'
import ProjectTile from '../components/ProjectTile'


class AllProjects extends React.Component {
   

    mapProjects = () => {
        return this.props.allprojects.map(project => 
        <div>
        <ProjectTile handleClick={this.props.handleClick} project={project} />
        </div>
        )
    }

    render() { 
        // const {handleSearch} = this.props

        return (
            <div> 
                <h1>ALL PROJECTS</h1>
                <input onChange={this.props.handleSearch} type="text"></input>
                <br />
                <br />
                <div className='parent'>
                {
                    this.mapProjects()
                }
                </div>
            </div>
         );
    }
}
 
export default AllProjects;