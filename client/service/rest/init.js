import PathUrls from '../../resources/path-utils';
import Headers from '../../resources/headers';

const Header = new Headers(); 
const Path = new PathUrls(); 

const container = (data)=> {
    if (data === null) {
        return data;
    }
    return Array.isArray(data) ? data : [data];
}

/* Load Channels */
const loadChannelsUrl = `${Path.channelsPath()}`;
const loadChannelsHeader = ()=> (Header.getHeader());
export const loadChannels = (test) => fetch(loadChannelsUrl, loadChannelsHeader()).then(response => response.json());
/* Load Channels End*/



