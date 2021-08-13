import React from 'react';
import styles from './DataDisplay.module.css'

const DataDisplay = ({data}) => {
    const { heroPosition, cloudPosition, achievedGoal} = data
    return ( 
        <div className={styles.dataWrapper}>
            <div className={styles.dataContainer}>
                <p className={styles.dataItem}>{`hero position: x: ${heroPosition.x} y: ${heroPosition.y}`}</p>
                <p className={styles.dataItem}>{`cloud position: x: ${cloudPosition.x} y: ${cloudPosition.y}`}</p>
                <p className={styles.dataItem}>{`achieved goal:${achievedGoal}`}</p>
            </div>
        </div>
     );
}
 
export default DataDisplay