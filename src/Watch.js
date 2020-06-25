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
  const username = query.get('username')
  const [live,setLive] = useState(true)
  const [name,setName] = useState('')
  
  // get stream ; send stream id
  // what is sent to backend
  
  fetch('https://off-hours-backend.herokuapp.com/stream?username='+username)
  .then(response => response.json())
  .then(data => {
      setLive(data.isLive)
      setName(data.name)
  });

// <TwitchPlayer video= {stream["vidnum"]} />
  return (
    <Styles>
        {live?(
        <TwitchEmbed channel={username} withChat={false}/>
        ):(
          <p>is not live</p>
        )}
        <div class='streamer'>
            <p>{name}</p>
        </div>
    </Styles>

      
  );
}

export default Watch;