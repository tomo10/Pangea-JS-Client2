import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styling/projectTile.module.css'


class MyProjectTile extends React.Component {

    loopDonations = () => {
        let arr = this.props.project.donations.map(obj => obj.donation)
        return arr.map(el => <ul>£{el}</ul> 
        )
       }
    
    render () {
      const { project } = this.props
        
    return (
      <div className={styles.tile}>
        <img src={project.image} className={styles.tileImage} alt='picture'></img>
        <div >
          <h3>{project.name}</h3>
          {/* <p>Total funding required: {project.funding_required}</p> */}
          <div>
            <div className='donations'>{this.loopDonations()}</div>
          </div>
        </div>
        <div className={styles.linkPosition}>
            <Link className={styles.detailLink} to={`/projects/${project.slug}`}>VIEW DETAILS</Link>
        </div>
      </div>
    )}
}



export default MyProjectTile