import { RECIVE_CHANNELS, SELECT_CHANNEL } from '../constants/ActionTypes';

const initialState = {
  channels: [],
  selectedChannels: []
};

export default function channels(state = initialState, action) {
    switch (action.type) {
      case RECIVE_CHANNELS:
          return Object.assign({}, state, {
              channels: action.payload
          });
      case SELECT_CHANNEL:
          let new_selected_channels = [...state.selectedChannels];
          if (state.selectedChannels.includes(action.payload)) {
      			new_selected_channels.splice(new_selected_channels.indexOf(action.payload), 1);
            return { 
              ...state, 
              selectedChannels: new_selected_channels 
            }
          }else {
      			new_selected_channels.push(action.payload);
            return { ...state, selectedChannels: new_selected_channels }
          }
      default:
          return state;
    }
}