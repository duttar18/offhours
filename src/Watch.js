import React, {useState} from 'react'
import styled from 'styled-components';
import { TwitchEmbed, TwitchPlayer } from 'react-twitch-embed';
import { useLocation } from "react-router-dom";
var images = require.context('./img', true);

const Styles = styled.div`
  .avatar {
      border-radius : 50%;
      width: 70px;
      height: 70px;
  }
  .streamer {
    margin: 0px 10px 10px 10px;
    width: 400px;
    height: 100px;
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .streamer p {
    margin-left: 10px;
    font-size: 30px;
  }
`;


const Watch = () => {    

  let location = useLocation();    
  const query = new URLSearchParams(location.search);
  const id = query.get('id')
  
  // get stream
  let stream = {
      streamer : "TimTheTatman",
      streamerImg : "./userImg/userimg2.jpg",
      isLive : false,
      vidnum : 333014765,
      streamid : 5
  }

  return (
    <Styles>
        { stream["isLive"]?(
        <TwitchEmbed channel={stream['streamer']} withChat={false}/>
        ):(
          <TwitchPlayer video= {stream["vidnum"]} />
        )}
        <div class='streamer'>
            <img class='avatar' src={images(stream['streamerImg'])} style={{margin: "0px 0px 0px 10px"}} alt='avatar'/>
            <p>{stream['streamer']}</p>
        </div>
    </Styles>

      
  );
}

export default Watch;