import React, { Component, PropTypes } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectChannel } from '../../actions/channels'

const getChannelById = (state, props) => {
  return state.channels.channels.filter(item => item.id == props.channel_id)[0]
}

const getChannel = createSelector(
  [ (state, props) => getChannelById(state, props) ],
  (channel) => { return channel }
);

const getStatus = createSelector(
  [ (state, props) => state.channels.selectedChannels.includes(props.channel_id)],
  (status) => { return status }
);
const getSelectedChannels = createSelector(
  [ (state, props) => state.channels.selectedChannels],
  (channels) => { return channels }
);

const getLogoToken = createSelector(
  [ (state, props) => getChannelById(state, props) ],
  (channel) => { return channel.qualities[0].logo_token }
);

const getTitle = createSelector(
  [ (state, props) => getChannelById(state, props) ],
  (channel) => { return channel.title }
);


const ChannelConnect = (WrappedComponent) => {
  return class ChannelConnect extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const mapStateToProps = (state, props) => ({
  channel: getChannel(state, props),
  logo_token: getLogoToken(state, props),
  status: getStatus(state, props),
  title: getTitle(state, props),
})

const mapDispatchToProps = (dispatch) => ({
  selectChannel: (channel) => {dispatch(selectChannel(channel))}
})

export default compose( connect(mapStateToProps, mapDispatchToProps), ChannelConnect );