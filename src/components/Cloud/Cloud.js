import React from 'react';
import CloudImg from './mario-cloud.png'
import styles from './Cloud.module.css'

const Cloud = ({position}) => {
    return ( 
        <div className={styles.cloudContainer} style={{left: position.x, top: position.y}}> 
            <img src={CloudImg} alt="cloud" className={styles.cloudImage}/>
        </div>
     );
}
 
export default Cloud;