import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => {
    // check jills api if were logged in
    const context = {
        "logname" : "duttar",
        "loggedin" : false
    }

    return(
        <Styles>
            <Navbar>
                <Navbar.Brand href="/"><img src={require("../img/assets/logo1.png")} style={{height: "30px"}} alt='offhours logo'/>Offhours</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-nav">
                    <Nav className="ml-auto" >
                        <Nav.Item><Nav.Link href="/browse">Browse</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/stream">Stream</Nav.Link></Nav.Item>
                        <Nav.Item>
                            {context["loggedin"] ?
                            (<Nav.Link>Logout({context["logname"]})</Nav.Link>):
                            (<Nav.Link href="/login">Login</Nav.Link>)}
                        </Nav.Item>  
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
    
} 

export default NavigationBar;