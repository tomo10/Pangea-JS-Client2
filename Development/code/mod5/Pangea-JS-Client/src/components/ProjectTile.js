import React from 'react'
import { Link } from 'react-router-dom'


class ProjectTile extends React.Component {
    
    render () {
      const { project } = this.props

    return (
      <div className='tile'>
        <img src={project.image} className='tile-image' alt='picture'></img>
        <div >
          <h3>{project.name}</h3>
          <p>Amount pledged: {project.amount_pledged}</p>
        </div>
        <Link className='detail-link' to={`/projects/${project.slug}`}>VIEW DETAILS</Link>
      </div>
    )}
}



export default ProjectTile