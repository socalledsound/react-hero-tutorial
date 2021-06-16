import React from 'react';
import cloudImg from './mario-cloud.png'
import styles from './Cloud.module.css'

const Cloud = () => {
    return ( 
        <div className={styles.cloudContainer}>
            <img src={cloudImg} alt="cloud" className={styles.cloudImage}/>
        </div>
     );
}
 
export default Cloud;