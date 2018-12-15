import { RECIVE_CHANNELS, SELECT_CHANNEL } from '../constants/ActionTypes'

export function reciveChannels(value){
    return{
        type: RECIVE_CHANNELS,
        payload: value
    }
}
export function selectChannel(value){
    return{
        type: SELECT_CHANNEL,
        payload: value
    }
}