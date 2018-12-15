import { LOAD_CHANNELS } from '../constants/ActionTypes'

export function loadChannels(){
    return{
        type: LOAD_CHANNELS
    }
}

export function loadChannelsFail(){
    return{
        type: LOAD_CHANNELS_FAIL
    }
}
