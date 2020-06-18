import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useLocation} from "react-router-dom";
import styled from 'styled-components';


const Styles = styled.div`
  .avatar {
      border-radius : 50%;
      width: 70px;
      height: 70px;
  }
  .streamer {
    margin: 0px 10px 10px 10px;
    width: 400px;
    height: 100px;
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .streamer p {
    margin-left: 10px;
    font-size: 30px;
  }
  .vid {
      margin: 30px 0px 0px 0px;
  }

`;



const Login = (props) => {

    let location = useLocation();    
    const query = new URLSearchParams(location.search);
    let reroute = query.get('reroute')

    const [invalid,setInvalid] = useState(false)

    const submit = () => {

        // check jills api to login
        let api = false

        if (!api){
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
                    <Form.Control type="text" placeholder="Username" />
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
        </Styles>
        
    )
}
export default Login;

