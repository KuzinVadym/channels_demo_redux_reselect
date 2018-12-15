import React from 'react';

import ChannelConnect from '../HOC/ChannelConnect';

import style from "./channeltitle.css";

const ChannelTitle = ({title, selectChannels}) => {
  return (
    <div className={style.main}>
      {title}
    </div>
  )
}

export default ChannelConnect(ChannelTitle);