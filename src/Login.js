import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useLocation} from "react-router-dom";
import styled from 'styled-components';


const Styles = styled.div`
  

`;



const Login = (props) => {

    let location = useLocation();    
    const query = new URLSearchParams(location.search);
    let reroute = query.get('reroute')

    const [invalid,setInvalid] = useState(false)

    const submit = () => {

        
        const send = {
            "username": "duttar",
            "password": "1234"
        }
        // post request jills api to login
        const receive = {
            "logname" : "duttar",
            "loggedin" : false
        }

        if (!receive["loggedin"]){
            setInvalid(true)
            return
        }
        if (reroute){
            reroute='/'+reroute
            props.history.push({reroute});
        }
        else{
            props.history.push('/browse');
        }
        
    }
    
    const keyPress=(k)=>{
        if (k.key === 'Enter'){
          submit()
        }
    }
    return(
        <Styles>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" autofocus="true" onKeyPress={keyPress} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onKeyPress={keyPress}/>
                </Form.Group>
                {invalid?(<p style={{color: "red"}}>Username/Password incorrect</p>):<p></p>}
                
                <Button variant="primary" type="button" onClick={submit}>
                    Submit
                </Button>
            </Form>
            <a href="https://www.twitch.tv/signup"><p>Sign Up (Through Twitch)</p></a>
        </Styles>
        
    )
}
export default Login;

