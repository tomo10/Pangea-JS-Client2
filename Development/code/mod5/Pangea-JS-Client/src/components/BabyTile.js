import React from 'react'
import styles from '../styling/babyTile.module.css'
import { Link } from 'react-router-dom'

class BabyTile extends React.Component {

    render () {
      const { image, name, slug } = this.props.project

    return (
      <div className={styles.tile}>
        <img src={image} className={styles.image} alt='picture'></img>
        <div >
          <h3 className={styles.font}>{name}</h3>
        </div>
        <div className={styles.linkPosition}>
            <Link className={styles.detailLink} to={`/projects/${slug}`}>VIEW DETAILS</Link>
        </div>
      </div>
    )}
}



export default BabyTile