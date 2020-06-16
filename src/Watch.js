import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';


const Styles = styled.div`
    .twitch-embed{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;


const Watch = () => {    


    var streamId = this.props.match.params.id;
    return (
        <div>
          <TwitchEmbed
            channel="moonstar_x"
            id="moonstar_x"
            theme="dark"
            muted
            onVideoPause={() => console.log(':(')}
          />
          <TwitchChat channel="moonstar_x" theme="dark" parent={['localhost']} />
          <TwitchClip clip="WealthyBumblingKimchiItsBoshyTime" parent={['localhost', 'mycoolsite.com']} />
          <TwitchPlayer video="333014765" parent={['mycoolsite.com']} />
        </div>
      );
}

export default Watch;