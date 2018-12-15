import React from 'react';

import ChannelConnect from '../HOC/ChannelConnect';

import { Star_Icon, Empty_Star_Icon } from '../icons'
import style from "./channelicon.css";

const ChannelIcon = ({status}) => {
  return (
    <div className={style.main}>
      {(status) ? <Star_Icon /> : <Empty_Star_Icon />}
    </div>
  )
}

export default ChannelConnect(ChannelIcon);