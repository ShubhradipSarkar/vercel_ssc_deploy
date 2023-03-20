import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import ViewBoy from './ViewBoy';
import {useEffect} from 'react';
import Button from 'react-bootstrap/Button';

const API="http://localhost:4000/mens";
function People(props){
    const navigate=useNavigate();
    const view=()=>{
        console.log(props.name);
        // <ViewBoy/>
        // navigate(props.id);
        console.log(props.id);
    }
    return(
        <div className="people d-flex flex-column align-item-center">
            
            <img src={props.dp} alt="dp"  className="img w-100 h-50"/>
            <center></center>
            <div className='leafy'><p className='card-name'>{props.name}</p> 
            <img src={require('../../src/images/leaf.png')} alt="" className='leaf'/></div>
            <p className='card-desig'>{props.designation}</p>
            <center><a href={props.id}>
        <Button variant='primary' size='md' className='align-items-center w-100'>View details</Button>
      </a></center>
      
        </div>
    )
}
export default People;