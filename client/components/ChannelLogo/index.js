import React from 'react';

import ChannelConnect from '../HOC/ChannelConnect';

import { Avatar_Icon } from '../icons'

import style from "./channellogo.css";

const ChannelLogo = ({logo_token}) => {
  return (
    <div className={style.main}>
      {(logo_token) 
        ? <img className={style.img} src={`https://images.zattic.com/logos/${logo_token}/white/240x135.png`}/>
        : <Avatar_Icon />
      }
    </div>
  )
}

export default ChannelConnect(ChannelLogo);