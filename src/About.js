import React from 'react'
import styled from 'styled-components';
import Content from "./Content";
import { Typography, makeStyles, Grid } from '@material-ui/core'

const About = () => { 
    return ( 
        <Grid continer direct="column">
            <img src={require("./img/assets/people.JPG")} style={{height: "700px"}} alt='people'/>
            <Typography variant="h2">About Us</Typography>
            <Typography variant="p">OffHours is a next generational education platform that provides on demand office hours and discussions streamed straight to your personal device. Students can browse and join classes and chat with the instructors in each room to learn and ask questions. It’s fun, casual and reliable and takes all the benefits of a traditional classroom and streams it straight to your preferred studying location without you having to move an inch. OffHours allows teachers of all kinds to express themselves in teaching, whether through working their own hours or to the environment they wish to cultivate. Anything from a detailed lecture to a casual hangout to answer questions is all possible with our platform.  </Typography>
            <Typography variant="h2">Meet The Founders</Typography>
            <Grid item container> 
            <Content />
            </Grid>
        </Grid>
    )
}
 export default About; 