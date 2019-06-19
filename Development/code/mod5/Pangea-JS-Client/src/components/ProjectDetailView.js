import React from 'react'
// import Button from '@material-ui/core/Button'
import styles from '../styling/projectDetailView.module.css'

import { Link } from 'react-router-dom'

class ProjectDetailView extends React.Component {

    
    render () {
        console.log('ProjectDetailView props:', this.props)
        const { project } = this.props
         
        return (
      <div className='detail-container'>
        <div className='detail-wrapper'>
          <img className={styles.image} src={project.image} alt='picture'></img>
          <div>
            <h2 >{project.name}</h2>
            {/* <Button className='navigator-link' onClick={() => this.props.addToWatchList(project) }>ADD TO WATCHLIST</Button> */}
            <div className={styles.watchList}>
              <Link onClick={() => this.props.addToWatchList(project)} className='navigator-link' >ADD TO WATCHLIST</Link>
            </div>
            <form className={styles.form} onSubmit={(e) => this.props.handleDonationServer(e, project)}>
              <label>Please enter amount you would like to donate and press Enter:   </label>
              
              <input 
                  className={styles.input}
                  name='donation' 
                  placeholder='£'>
              </input>

            </form>
            <div className={styles.dollar}>
              <p>Total Amount pledged: £{project.amount_pledged}</p>
              <p>Total Funding required: £{project.funding_required}</p>
            </div>
            <p>{project.description}</p>
            <br />
          </div>
        </div>
      </div>
    )
    }
}



export default ProjectDetailView

