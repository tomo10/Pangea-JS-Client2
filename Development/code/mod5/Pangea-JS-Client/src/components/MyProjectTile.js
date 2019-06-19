import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styling/projectTile.module.css'


class MyProjectTile extends React.Component {

    // loopDonations = () => {
    //     this.props.project.donations.map(donation => { 
    //     return <h3>{donation.donation}</h3>
    // })
    // }
    
    render () {
      const { project } = this.props
        
    return (
      <div className={styles.tile}>
        <img src={project.image} className={styles.tileImage} alt='picture'></img>
        <div >
          <h3>{project.name}</h3>
          <p>Total funding required: {project.funding_required}</p>
          {/* <p>Donations: {project.donations}</p> */}
          {/* <div>{this.loopDonations()}</div> */}
        </div>
        <div className={styles.linkPosition}>
            <Link className={styles.detailLink} to={`/projects/${project.slug}`}>VIEW DETAILS</Link>
        </div>
      </div>
    )}
}



export default MyProjectTile