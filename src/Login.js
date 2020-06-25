import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useLocation} from "react-router-dom";
import styled from 'styled-components';


const Styles = styled.div`
  

`;



const Login = (props) => {

    const [url,setUrl] = useState("");
    const [failed,setFailed] = useState(<div></div>);


    let location = useLocation();    
    const query = new URLSearchParams(location.search);

    
    console.log("got he")
    console.log(document.location.hash)
    if(document.location.hash && document.location.hash!==''){
        const requestOptions = {
            'method': 'POST',
            headers: {'Content-Type':'application/json'},
            body: {
                "token": document.location.hash
            }
        };
        console.log("goz here")
        fetch('https://off-hours-backend.herokuapp.com/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("got here")
                console.log(data)
                if(data.loggedin) {
                    setFailed(<p>succesfully logged in!</p>)
                }
                else {
                    setFailed(<p>failed login</p>)
                }
        });
            
    }

    

    const submit = () => {
        let clientid = "hgzp49atoti7g7fzd9v4pkego3i7ae";
        let redirecturi = "https://offhours.herokuapp.com/login/";
        let scope = "user_read";
        setUrl('https://id.twitch.tv/oauth2/authorize?client_id='+clientid+'&redirect_uri='+redirecturi+'&response_type=toekn&scope='+scope);
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

