import React from 'react';
import styles from './MoveButton.module.css'

const moveValues = {
    'left' : {x: -10, y: 0},
    'right' : {x: 10, y: 0},
    'up' : {x: 0, y: -10},
    'down' : {x: 0, y: 10},
}


const MoveButton = ({updateParentParent, direction}) => {
    return ( 

        <div>
            <button 
                className={`${styles.moveButton} ${styles[direction]}`}
                onClick={() => (moveValues[direction])}
            >
                {direction}
            </button>
        </div>

     );
}
 
export default MoveButton;