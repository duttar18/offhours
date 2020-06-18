import React from 'react'
import styled from 'styled-components';

var images = require.context('./img', true);

const Styles = styled.div`
 .subject {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 20px;
    grid-template-columns: auto auto auto auto auto;
    justify-content: start;
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

const Browse = () => {
    let subjects = [];
 

    subjects = [
        {
            subject: "AP Chemistry",
            streams: [
                {
                    streamer : "Raul Dutta",
                    streamerImg : "./userImg/userimg1.png",
                    streamImg : "./streamImg/stream1.jpg",
                    streamLink : "/watch?id=0",
                },
                {
                    streamer : "Daniel Zheng",
                    streamerImg : "./userImg/userimg2.jpg",
                    streamImg : "./streamImg/stream2.jpg",
                    streamLink : "/watch?id=1",
                },
                {
                    streamer : "Jillian Lew",
                    streamerImg : "./userImg/userimg3.jpg",
                    streamImg : "./streamImg/stream3.jpg",
                    streamLink : "/watch?id=2",
                }
            ]
        },
        {
            subject: "EECS 281",
            streams: [
                {
                    streamer : "Daniel Zheng",
                    streamerImg : "./userImg/userimg2.jpg",
                    streamImg : "./streamImg/stream4.jpg",
                    streamLink : "/watch?id=3",
                } 
            ]
        },
    ]
    

    return(
        <Styles>
            {subjects.map((subject) => 
                <div>
                    <h2>{subject['subject']}</h2>
                    <div class="subject">
                        {subject['streams'].map((stream)=>
                            <div class='stream'>
                                <a href={stream['streamLink']}>
                                    <img src={images(stream['streamImg'])} style={{height: "150px"}} alt='stream'/>
                                </a>
                                <div>
                                    <img class='avatar' src={images(stream['streamerImg'])} style={{margin: "0px 0px 0px 10px"}} alt='avatar'/>
                                    <p>{stream['streamer']}</p>
                                </div>

                            </div>
                        )}
                    </div>

                </div>)}
        </Styles>
    )
}

export default Browse;