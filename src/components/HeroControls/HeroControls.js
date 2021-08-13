import React from 'react';
import MoveButton from '../MoveButton/MoveButton';
import styles from './HeroControls.module.css'

const HeroControls = ({updateParent}) => {
    return ( 
        <div className={styles.buttonContainer}>
            <div className={styles.row}>
                <MoveButton direction={'up'} />
            </div>
            <div className={styles.row}>
                <MoveButton direction={'left'} />
                <MoveButton direction={'right'} />
            </div>
            <div className={styles.row}>
                <MoveButton direction={'down'} />
            </div>
        </div>


     );
}
 
export default HeroControls;
