import React from 'react';
import uniqid from "../../utils/uniqid";

import Channel from "../Channel";
import ChannelNumber from "../ChannelNumber";
import ChannelLogo from "../ChannelLogo";
import ChannelTitle from "../ChannelTitle";
import ChannelIcon from "../ChannelIcon";

import style from "./favorites.css";

const Favorites = ({selectedChannels}) => {
  return (
    <div className={style.main}>
      <div className={style.title} >MY FAVORITE CHANNELS</div>
      <div 
        className={style.content} >
         {selectedChannels.map((channel_id, index) => {
           return <Channel key={`channel_${uniqid()}`} channel_id={channel_id}>
                     <ChannelNumber index={index + 1}/>
                     <ChannelLogo />
                     <ChannelTitle />
                     <ChannelIcon />
                  </Channel>
         })}
      </div>
    </div>
  )
}

export default Favorites;