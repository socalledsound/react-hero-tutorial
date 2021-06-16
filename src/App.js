import React, { Component } from 'react'
import styles from './App.module.css'
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.mainWrapper}>
                <div className={styles.wrapperLeft}>div 1</div>
                <div className={styles.wrapperRight}>div 2</div>
            </div>

         );
    }
}
 
export default App;
