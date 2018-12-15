import React, { PureComponent } from 'react';

import ChannelConnect from '../HOC/ChannelConnect';

import style from "./channel.css";

class Channel extends PureComponent {
	
	render() {
		const {children, channel_id, selectChannel } = this.props;
		console.log('channel');
		return (
			<div className={style.main} onClick={() => selectChannel(channel_id)} >
  			{React.Children.map(children, child => React.cloneElement(child, { channel_id: channel_id }))}
      </div>
		);
	}
}

export default ChannelConnect(Channel)