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

const Browse = () => {
    let subjects = {};
    
    // get; /subjects/info ; send nothing
    subjects = 
    {   
        1 : {
                "subject" :  "AP Chemistry",
                "streams" : 
                    [
                        {
                            "streamer" : "Raul Dutta",
                            "streamId ": 1
                        },
                        {
                            "streamer" : "Daniel Zheng",
                            "streamId" : 3
                        }
                    ]
            },
        2 : {
                "subject" : "EECS 281",
                "streams" : 
                    [
                        {
                            "streamer" : "Jillian Leu",
                            "streamId" : 2
                        } 
                    ]
        }
    }
    

    return(
        <Styles>
            {Object.keys(subjects).map((subjectid,index)=>(
                <div>
                    <h2>{subjects[subjectid]["subject"]}</h2>
                    <div class="subject">
                        {subjects[subjectid]["streams"].map((stream)=>
                            <div class='stream'>
                                <a href={"/watch?id="+stream['streamId']}>
                                    <img src={images("./streamImg/stream.jpg")} style={{height: "150px"}} alt='stream'/>
                                </a>
                                <div>
                                    <img class='avatar' src={images("./userImg/user.jpg")} style={{margin: "0px 0px 0px 10px"}} alt='avatar'/>
                                    <p>{stream['streamer']}</p>
                                </div>

                            </div>
                        )}
                    </div>

                </div>))}
        </Styles>
    )
}

export default Browse;