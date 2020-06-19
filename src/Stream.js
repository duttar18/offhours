import React, {useState} from 'react'
import { Dropdown, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';

const Styles = styled.div`
`;

const Stream = (props) => {

    // get; /login ; send nothing
    const context = {
        "logname" : "duttar",
        "loggedin" : true
    }

    if(!context["loggedin"]){
        props.history.push('/login?reroute=stream');
    }

    const [live,setLive] = useState(false)
    const [liveWarning,setLiveWarning] = useState(false)

    // get; /subjects ; send nothing
    let subjects = {
        12 : "AP Chemistry",
        24 : "EECS 281"
    }

    let location = useLocation();    
    const query = new URLSearchParams(location.search);
    let subject = query.get('subject')
    console.log(subject)
    if(!subject || !subjects[subject]){
        subject="Select a Subject"
    }
    else{
        subject=subjects[subject]
    }

    const golive = () => {
        
        // push; /live ; send subject id ( checks if user is live on twitch; if so then creates streaming entry for loggedin user)
        // what is sent
        let send = {
            "subjectid" : subjects[subject]
        }
        // what is received
        let apilivecall = {
            "livecall" : false
        }
        
        if (apilivecall["livecall"]){
            setLive(true);
        }
        else{
            setLiveWarning(true);
        }
    }


    return (
        <Styles>
            {live?(
                <p>You are live</p>
            ):(
                <Dropdown>
                    <p>After starting your stream on twitch, select a subject. After you go live, watch the questions roll in.</p>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {subject}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {Object.keys(subjects).map((id,index)=>(
                            <Dropdown.Item href={"?subject="+id}>{subjects[id]}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                    <br/>
                    <Button variant="primary" type="button" autofocus="true" onClick={golive}>
                        Go Live
                    </Button>
                    {liveWarning?(<p style={{color: "red"}}>Start Streaming on Twitch to Begin</p>):<p></p>}
                </Dropdown>
            )}
        </Styles>
    )
}

export default Stream;