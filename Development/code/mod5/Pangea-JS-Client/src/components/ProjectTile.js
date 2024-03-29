import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styling/projectTile.module.css'


class ProjectTile extends React.Component {
    
    render () {
      const { project } = this.props

    return (
      <div className={styles.tile}>
        <img src={project.image} className={styles.tileImage} alt='picture'></img>
        <div >
          <h3>{project.name}</h3>
          <p>Amount pledged: £{project.amount_pledged}</p>
        </div>
        <div className={styles.linkPosition}>
            <Link className={styles.detailLink} to={`/projects/${project.slug}`}>VIEW DETAILS</Link>
        </div>
      </div>
    )}
}



export default ProjectTile