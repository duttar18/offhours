import React from "react";
import UserCard from "./UserCard";
import { Grid } from "@material-ui/core";

const Content = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <UserCard
                    title="Daniel Zheng"
                    subheader="Age 20"
                    imgSrc="https://i.postimg.cc/8kWVsLVX/DSC09838-ARW.jpg"
                    description="20 year old ladies man"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <UserCard
                    title="Jillian Lew"
                    subheader="Age 19"
                    imgSrc="https://i.postimg.cc/9fpYL8Tg/IMG-0539.jpg"
                    description="midget cdrama lover unsure of ethnic identity"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <UserCard
                    title="Raul Duttar"
                    subheader="Age 20"
                    imgSrc="https://i.postimg.cc/x1dm0fb5/IMG-0540.jpg"
                    description="crazy hacker with gordon ramsay as mom"
                />
            </Grid>
        </Grid>
    );
};

export default Content;
