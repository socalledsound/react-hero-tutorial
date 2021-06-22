import React from 'react'
import styles from './Goal.module.css'
const Goal = ({position}) => {
    return ( 
        <div
            className={styles.goal}
            style={{
                top: position.y,
                left: position.x,
            }}
            >
            come here young hero!
        </div>
     );
}
 
export default Goal;