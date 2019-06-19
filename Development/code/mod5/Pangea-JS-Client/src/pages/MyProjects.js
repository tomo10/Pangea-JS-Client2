import React from 'react'
import MyProjectTile from '../components/MyProjectTile'
import styles from '../styling/myProjects.module.css'


class MyProjects extends React.Component {
    
    getDonations = () => {
        const array = this.props.myprojects.map(proj => proj.donations).flatMap(obj => obj)
        
    }

    mapProjects = () => {
        // if (this.props.myprojects.parsed_donations) { 
        return this.props.myprojects.map(project => 
        <div>
        <MyProjectTile project={project} />
        </div>
        )
    } 
    

    render() {
        return ( 
            <div className={styles.container}>
                <div className='parent'>
                {
                    this.mapProjects()
                }
                </div>
            </div>
         );
    }
}
 
export default MyProjects;