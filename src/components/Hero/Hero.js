import React from 'react';
import UnicornImg from './unicorn.png'
import RainbowLeprechaunImg from './Rainbow_Leprechaun.png'
import styles from './Hero.module.css'

const Hero = ({position, achievedGoal}) => {
    return ( 

        <div className={styles.heroContainer} style={{left: position.x, top: position.y}}>
            {
                achievedGoal ? 
                    <img src={RainbowLeprechaunImg} alt="leprechaun" className={styles.heroImage}/>
                    :
                    <img src={UnicornImg} alt="unicorn" className={styles.heroImage}/>
            }
            
        </div>

     );
}
 
export default Hero;