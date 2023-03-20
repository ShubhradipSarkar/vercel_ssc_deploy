// import React from 'react';

// function Card(){
//     return(
//         <h1>card</h1>
//     )
// }

// export default Card;


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({text,title,picture}) {
  return (
    <Card style={{ width:"50%" }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {/*  */}
          {text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
