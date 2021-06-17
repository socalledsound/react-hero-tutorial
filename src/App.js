import React, { Component } from 'react'
import Cloud from './components/Cloud/Cloud'
import Hero from './components/Hero/Hero'
import styles from './App.module.css'
class App extends Component {
    state = { 
        heroPosition: {
            x: window.innerWidth/2 + window.innerWidth/4 - 100,
            y: window.innerHeight/2  - 100,
        },
        cloudPosition : {
            x: window.innerWidth/2,
            y: 50
        },
     }

     componentDidMount(){
         this.updateCloudPosition();
     }


     updateCloudPosition = () => {
         const { cloudPosition } = this.state;
        let newCloudPosition
        if(cloudPosition.x > window.innerWidth - 100){
            newCloudPosition = {
                x: window.innerWidth/2,
                y: 50
            }
        } else {
            newCloudPosition = {x: cloudPosition.x + 1, y: cloudPosition.y}
        }

         this.setState({ cloudPosition: newCloudPosition})
         window.requestAnimationFrame(this.updateCloudPosition)
     }


    render() { 
        const { heroPosition, cloudPosition } = this.state;
        return ( 
            <div className={styles.mainWrapper}>
                <div className={styles.wrapperLeft}>div 1</div>
                <div className={styles.wrapperRight}>
                    <Cloud position={cloudPosition}/>
                    <Hero position={heroPosition}/> 
                </div>
            </div>

         );
    }
}
 
export default App;

