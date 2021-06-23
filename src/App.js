import React, { Component } from 'react'
import Cloud from './components/Cloud/Cloud'
import Hero from './components/Hero/Hero'
import Goal from './components/Goal/Goal'
import DataDisplay from './components/DataDisplay/DataDisplay'
import HeroControls from './components/HeroControls/HeroControls'
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
        goalPosition: {
            x: window.innerWidth/2 + window.innerWidth/4 - 100,
            y: window.innerHeight - 200,
        },
        achievedGoal : false
     }

     componentDidMount(){
         this.updateCloudPosition();
     }

     updateHero = (moveValue) => {
         
        const { heroPosition, goalPosition } = this.state;
        
        const newHeroPosition = {
            x: heroPosition.x + moveValue.x,
            y: heroPosition.y + moveValue.y,
        }

        const updatedAchievedGoal = newHeroPosition.y > goalPosition.y - 200 ? true : false
        
         this.setState({heroPosition: newHeroPosition, achievedGoal: updatedAchievedGoal})
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
        const { heroPosition, cloudPosition, goalPosition, achievedGoal  } = this.state;
        const data = {heroPosition, cloudPosition, achievedGoal }
        return ( 
            <div className={styles.mainWrapper}>
                <div className={styles.wrapperLeft}>
                    <DataDisplay data={data}/>
                    <HeroControls updateParent={this.updateHero}/>
                </div>
                <div className={styles.wrapperRight}>
                    <Cloud position={cloudPosition}/>
                    <Hero position={heroPosition} achievedGoal={achievedGoal}/> 
                    <Goal position={goalPosition}/>
                </div>
            </div>

         );
    }
}
 
export default App;

