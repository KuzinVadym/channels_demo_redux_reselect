import { connect } from 'react-redux';
import { selectChannel } from '../../actions/channels'
import Favorites from '../../components/Favorites'

const mapStateToProps = (state) => ({
  selectedChannels: state.channels.selectedChannels
})

const mapDispatchToProps = (dispatch) => ({
  selectChannel: (channels) => {dispatch(selectChannel(channels))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)