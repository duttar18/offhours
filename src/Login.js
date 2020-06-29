import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useLocation} from "react-router-dom";
import styled from 'styled-components';


const Styles = styled.div`
  

`;



const Login = (props) => {

    const [url,setUrl] = useState("");
    const [failed,setFailed] = useState(<div></div>);


    const queryString = require('query-string');
    var parsed = queryString.parse(props.location.hash);
    var token = parsed.access_token 

    
    if(token && token!==''){
        const requestOptions = {
            'method': 'POST'
        };
        fetch('https://off-hours-backend.herokuapp.com/login?token='+token, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data.loggedin)
                console.log(data.username)
                window.username = data.username
                window.loggedin = data.loggedin
            });
            
    }

    

    const submit = () => {
        let clientid = "hgzp49atoti7g7fzd9v4pkego3i7ae";
        let redirecturi = "https://offhours.herokuapp.com/login/";
        let scope = "user_read";
        setUrl('https://id.twitch.tv/oauth2/authorize?client_id='+clientid+'&redirect_uri='+redirecturi+'&response_type=token&scope='+scope);
    }



    return(
                
            <Styles>
                <Button href={url} variant="primary" type="button" onClick={submit}>
                    Login Through Twitch
                </Button>
                {failed}
            </Styles>
        
    )
}
export default Login;

