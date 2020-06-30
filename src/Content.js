import React from "react";
import UserCard from "./UserCard";
import { Grid } from "@material-ui/core";

const Content = () => {
    return (
        <Grid container spacing={4}> 
            <Grid item xs={12} sm={4}>
                <UserCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <UserCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <UserCard/>
            </Grid>
        </Grid>
    ); 
};

export default Content;