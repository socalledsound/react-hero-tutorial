import React from 'react';
import UnicornImg from './unicorn.png'
// import RainbowLeprechaunImg from './Raibbow_Leprechaun.png'
import styles from './Hero.module.css'

const Hero = ({position}) => {
    return ( 

        <div className={styles.heroContainer} style={{left: position.x, top: position.y}}>
            <img src={UnicornImg} alt="unicorn" className={styles.heroImage}/>
        </div>

     );
}
 
export default Hero;