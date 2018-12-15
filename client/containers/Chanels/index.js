import { connect } from 'react-redux';
import { createSelector } from 'reselect';

//actions
import { loadChannels } from '../../actions/init'

import Channels from '../../components/Channels'

const getChannels = createSelector(
  [ (state) => state.channels.channels ],
  (channels) => channels.map(item => item.id)
);

const mapStateToProps = (state) => ({
  channels_id: getChannels(state)
})

const mapDispatchToProps = (dispatch) => ({
  loadChannels: () => {dispatch(loadChannels())},
})

export default connect(mapStateToProps, mapDispatchToProps)(Channels)