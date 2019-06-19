import React, { Component } from 'react';
import API from '../API'
import BabyTile from '../components/BabyTile';
import GalleryTile from '../components/GalleryTile';

import styles from '../styling/dashboard.module.css'



class Dashboard extends Component {

    getDonationsTotal = () => {
        if (this.props.myprojects.length > 0) {
            const arrayDonations = this.props.myprojects.map(proj => proj.donations).flatMap(obj => obj).map(obj => obj.donation)
            const reducer = (accumulator, currentValue) => accumulator + currentValue
            return arrayDonations.reduce(reducer)
        } else {
            return 0
        }
    }
   

    mapWatchList = () => {
        return this.props.watchList.map(project => <BabyTile project={project} />)
    }

    
    numberOfProjects = () => {
        return this.props.myprojects.length > 1 
        ? <h3>So far you have donated to {this.props.myprojects.length} Conservation projects!</h3>
        : <h3>So far you have donated to {this.props.myprojects.length} Conservation project!</h3>
    }
 
    
    render() { 
        
        return ( <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.header}>
                            <h2>Welcome to your dashboard</h2>
                        </div>
                        <div className={styles.sidebar}>
                            <div>
                                <GalleryTile allProjects={this.props.allProjects} />
                            </div>
                        </div>
                        <div className={styles.main}>
            
                            {this.numberOfProjects()}
                            <h3>The total amount you've donated so far is: £{this.getDonationsTotal()}</h3>
                            <h3>See the projects you are watching below:</h3>
                        <div className={styles.footer}>
                            <div className={styles.parent}>
                                {this.mapWatchList()}
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
                );
    }
}
 
export default Dashboard;
