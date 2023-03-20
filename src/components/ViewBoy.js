import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function ViewBoy(props){
    const navigate=useNavigate();
    const goback=()=>{
        navigate('/about');
    }
    return(
        <div>
            <h1>props.name</h1>
            <h2>desig</h2>
            <img src="" alt="pic" />
            <center><button onClick={goback}>go back to team</button></center>
        </div>
    )
}

export default ViewBoy;