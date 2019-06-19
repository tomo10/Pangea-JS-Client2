import React from 'react'
import ProjectTile from '../components/ProjectTile'
import styles from '../styling/allProjects.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class AllProjects extends React.Component {
   

    mapProjects = () => {
        return this.props.allprojects.map(project => 
        <div>
        <ProjectTile handleClick={this.props.handleClick} project={project} />
        </div>
        )
    }

    
    render() { 
    

        return (
            <div className={styles.container}> 
                <div className={styles.wrap}>
                    <div className={styles.search}>
                        <input className={styles.searchTerm} onChange={(e) => this.props.handleSearch(e)} placeholder="Search by project keyword" type="text"></input>
                        <button type='submit' className={styles.searchButton}><FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                </div>
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