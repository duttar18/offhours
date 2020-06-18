import React from 'react'

const Stream = (props) => {
    //check jills api if were logged in
    const logname = ""
    
    if(logname===""){
        props.history.push('/login?reroute=stream');
    }
    return (
        <div>
            <p>stream</p>
        </div>
    )
}

export default Stream;