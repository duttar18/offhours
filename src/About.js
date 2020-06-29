import React from 'react'
import styled from 'styled-components';
import { Typography } from '@material-ui/core'

const About = () => { 
    return ( 
        <div>
        <img src={require("./img/assets/people.JPG")} style={{height: "700px"}} alt='people'/>
        <Typography variant="h1">About Us</Typography>
        <Typography variant="p">OffHours is a next generational education platform that provides on demand office hours and discussions streamed straight to your personal device. Students can browse and join classes and chat with the instructors in each room to learn and ask questions. It’s fun, casual and reliable and takes all the benefits of a traditional classroom and streams it straight to your preferred studying location without you having to move an inch. OffHours allows teachers of all kinds to express themselves in teaching, whether through working their own hours or to the environment they wish to cultivate. Anything from a detailed lecture to a casual hangout to answer questions is all possible with our platform.  </Typography>
        </div>
    )
}
 export default About; 