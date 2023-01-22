import React from 'react';

function People(props){
    return(
        <div className="people">
            <img src={props.dp} alt="dp"  className="img"/>
            <div className='leafy'><p className='card-name'>{props.name}</p> 
            <img src={require('../../src/images/leaf.png')} alt="" className='leaf'/></div>
            <p className='card-desig'>{props.designation}</p>
        </div>
    )
}
export default People;