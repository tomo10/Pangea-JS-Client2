import React from 'react';
import styles from '../styling/galleryTile.module.css'
import { Link } from 'react-router-dom'



class GalleryTile extends React.Component {

    state = { 
              image: null,
              name: null,
              slug: null
            }


    componentDidMount () {
        let index = 0 
        let interval = setInterval(()=> {
            this.setState({
                image: this.props.allProjects[index].image,
                name: this.props.allProjects[index].name,
                slug: this.props.allProjects[index++].slug
            })
            if (index === this.props.allProjects.length) {
                clearInterval(interval)
            }
        }, 3000)
    }


    render () {
    const { image, name, slug } = this.state

    return (
    <div className={styles.tile}>
        <div >
        <h3 className={styles.font}>{name}</h3>
        </div>
        <img src={image} className={styles.image} alt='picture'></img>
        <div className={styles.linkPosition}>
            <Link className={styles.detailLink} to={`/projects/${slug}`}>VIEW DETAILS</Link>
        </div>
    </div>
    )}

}


export default GalleryTile