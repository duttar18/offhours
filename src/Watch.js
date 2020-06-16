import React from 'react'
import styled from 'styled-components';
import { TwitchEmbed } from 'react-twitch-embed';
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
  .vid {
      margin: 30px 0px 0px 0px;
  }

`;


const Watch = () => {    

    let location = useLocation();    
    const query = new URLSearchParams(location.search);
    const id = query.get('id')
    
    //api call using id

    let stream = {
        channel : "TimTheTatman",
        streamer : "Daniel Zheng",
        streamerImg : "./userImg/userimg2.jpg",
    }

    return (
        <Styles>
            <div class = 'vid'>
            <TwitchEmbed
                channel={stream['channel']}
                withChat={false}
            />
            <div class='streamer'>
                <img class='avatar' src={images(stream['streamerImg'])} style={{margin: "0px 0px 0px 10px"}} alt='avatar'/>
                <p>{stream['streamer']}</p>
            </div>
            </div>
        </Styles>
      );
}

export default Watch;