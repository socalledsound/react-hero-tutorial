import { GameActionTypes } from './GameActionTypes'

export const updateHeroPosition = (moveVal) => ({
    type: GameActionTypes.UPDATE_HERO_POSITION,
    payload: moveVal
})

export const updateCloudPosition = () => ({
    type: GameActionTypes.UPDATE_CLOUD_POSITION,
})