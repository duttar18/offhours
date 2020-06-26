import React , {useState} from 'react'
import styled from 'styled-components';

var images = require.context('./img', true);

const Styles = styled.div`
 .subject {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 20px;
    grid-template-columns: auto auto auto auto auto;
    justify-content: start;
    font-weight: bold;
    padding: 10px 10px 10px 10px; 
 }
  .avatar {
      border-radius : 50%;
      width: 40px;
      height: 40px;
  }
  .stream div {
    margin: 0px 10px 10px 10px;
    width: 400px;
    height: 70px;
    display: flex;
    justify-content: right;
    align-items: center;
  }

`; 

const Browse = (props) => {
    const [streamers,setStreamers] = useState([])
    fetch('https://off-hours-backend.herokuapp.com/all')
    .then(response => response.json())
    .then(data => {
        setStreamers(data.streamers)
    });

    return(
        <Styles>
            {streamers.map((streamer)=>
                <a href={"/watch?username="+streamer['username']}><p>{streamer["name"]}</p><br/></a>
            )}
        </Styles>
    )
}

export default Browse;