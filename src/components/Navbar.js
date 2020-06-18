import React from 'react';
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
    // check jills api if were logged in
    const logname = ""
    return(
        <Styles>
            <Navbar>
                <Navbar.Brand href="/"><img src={require("../img/assets/logo1.png")} style={{height: "30px"}} alt='offhours logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-nav">
                    <Nav className="ml-auto" >
                        <Nav.Item><Nav.Link href="/browse"><Button>Browse</Button></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/stream"><Button>Stream</Button></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about"><Button>About</Button></Nav.Link></Nav.Item>
                        <Nav.Item>
                            {logname==="" ? 
                            (<Nav.Link href="/login"><Button>Login</Button></Nav.Link>) : 
                            (<Nav.Link>Logout({logname})</Nav.Link>)}
                        </Nav.Item>  
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
    
} 

export default NavigationBar;