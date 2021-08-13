import { GameActionTypes } from './GameActionTypes' 

const initialState ={
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

const gameReducer = (state = initialState, action) => {
    switch(action.type){
        case GameActionTypes.UPDATE_HERO_POSITION :
           
            const newHeroPosition = {
                x: state.heroPosition.x + action.payload.x,
                y: state.heroPosition.y + action.payload.y,
            }
            return {
                ...state,
                heroPosition: newHeroPosition,
                achievedGoal: newHeroPosition.y > state.goalPosition.y - 200 ? true : false, 
            }
        case GameActionTypes.UPDATE_CLOUD_POSITION :
            console.log('in gameReducer, cloud position')
            const oldCloudPosition = state.cloudPosition
            let newCloudPosition
            if(oldCloudPosition.x > window.innerWidth - 100){
                newCloudPosition = {
                    x: window.innerWidth/2,
                    y: 50
                }
             } else {
                    newCloudPosition = {x: oldCloudPosition.x + 1, y: oldCloudPosition.y}
                }
            return {
                ...state,
                cloudPosition: newCloudPosition
            }
        default: 
            return {
                ...state
            }
    }

}
export default gameReducer