import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div``;

const Stream = (props) => {
    const [username, setUsername] = useState("");
    const [loggedin, setLoggedin] = useState(false);
    const [live, setLive] = useState(false);

    // get; /subjects ; send nothing
    fetch("https://off-hours-backend.herokuapp.com/login")
        .then((response) => response.json())
        .then((data) => {
            if (!data.loggedin) {
                props.history.push("/login");
            }
            setUsername(data.username);
        });

    fetch("https://off-hours-backend.herokuapp.com/stream")
        .then((response) => response.json())
        .then((data) => {
            setLive(data.isLive);
        });

    const golive = () => {
        const requestOptions = {
            method: "POST",
        };
        fetch(
            "https://off-hours-backend.herokuapp.com/stream?live=true",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                setLive(data.isLive);
            });
    };

    const stopstream = () => {
        const requestOptions = {
            method: "POST",
        };
        fetch(
            "https://off-hours-backend.herokuapp.com/stream?live=false",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                setLive(data.isLive);
            });
    };

    return (
        <Styles>
            {live ? (
                <Button
                    variant="primary"
                    type="button"
                    autofocus="true"
                    onClick={stopstream}>
                    Stop Stream
                </Button>
            ) : (
                <Button
                    variant="primary"
                    type="button"
                    autofocus="true"
                    onClick={golive}>
                    Go Live
                </Button>
            )}
        </Styles>
    );
};

export default Stream;
