import React, {useState} from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Styles = styled.div`
    .navbar {
        background-color: #30D5C8;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color white;

        &:hover {
            color: #ddd;
        }
    }
`;


export const NavigationBar = () => {
    const [username,setUsername] = useState("");
    const [loggedin,setLoggedin] = useState(false);
    // get; /subjects ; send nothing
    fetch('https://off-hours-backend.herokuapp.com/login')
        .then(response => response.json())
        .then(data => {
            setUsername(data.username);
            setLoggedin(data.loggedin);
    });

    const logout = () => {
        fetch('https://off-hours-backend.herokuapp.com/logout')
            .then(response => response.json())
            .then(data => {
                window.location.reload();
        });
    }

    return(
        <Styles>
            <Navbar>
                <Navbar.Brand href="/"><img src={require("../img/assets/logo1.png")} style={{height: "30px"}} alt='offhours logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-nav">
                    <Nav className="ml-auto" >
                        <Nav.Item><Nav.Link href="/browse"><Button color='white'>Browse</Button></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/stream"><Button>Stream</Button></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about"><Button>About</Button></Nav.Link></Nav.Item>
                        <Nav.Item>
                            {loggedin ?
                            (<Nav.Link><Button variant='contained' color='primary' onClick={logout}>Logout({username})</Button></Nav.Link>):
                            (<Nav.Link href="/login"><Button variant='contained' color='primary'>Login</Button></Nav.Link>)}
                        </Nav.Item>  
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
    
} 

export default NavigationBar;