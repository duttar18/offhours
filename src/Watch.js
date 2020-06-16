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
          <TwitchChat channel="moonstar_x" theme="dark" parent={['offhours.herokuapp.com/watch']} />
          <TwitchClip clip="WealthyBumblingKimchiItsBoshyTime" parent={['offhours.herokuapp.com/watch']} />
          <TwitchPlayer video="333014765" parent={['offhours.herokuapp.com/watch']} />
          hi?
        </div>
      );
}

export default Watch;