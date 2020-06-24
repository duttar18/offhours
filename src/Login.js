import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useLocation} from "react-router-dom";
import styled from 'styled-components';


const Styles = styled.div`
  

`;



const Login = (props) => {

    const [url,setUrl] = useState("");

    let location = useLocation();    
    const query = new URLSearchParams(location.search);
    let failed = (<div></div>)

    if(query.has('code')){
        const requestOptions = {
            'method': 'POST'
        };
        fetch('https://off-hours-backend.herokuapp.com/login/?code='+query.get('code'), requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("Got here")
                if(data.loggedin) {
                    failed =(<p>succesfully logged in!</p>)
                }
                else {
                    failed =(<p>failed login</p>)
                }
        });
            
    }

    

    const submit = () => {
        let clientid = "hgzp49atoti7g7fzd9v4pkego3i7ae";
        let redirecturi = "https://offhours.herokuapp.com/login/";
        let scope = "user_read";
        setUrl('https://id.twitch.tv/oauth2/authorize?client_id='+clientid+'&redirect_uri='+redirecturi+'&response_type=code&scope='+scope);
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

