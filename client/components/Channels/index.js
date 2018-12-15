import React from 'react';
import uniqid from "../../utils/uniqid";

import Channel from "../Channel";
import ChannelNumber from "../ChannelNumber";
import ChannelLogo from "../ChannelLogo";
import ChannelTitle from "../ChannelTitle";
import ChannelIcon from "../ChannelIcon";

import style from "./channels.css";

class Channels extends React.Component{

    constructor(props) {
        super(props);
    }
    
    componentDidMount = () => {
      this.props.loadChannels();
    }
      
    render(){
      const { channels_id } = this.props;
        return (
          <div className={style.main}>
            <div className={style.title} >ALL CHANNELS</div>
            <div 
              className={style.content} >
              {channels_id.map((channel_id, index) => {
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
}

export default Channels;