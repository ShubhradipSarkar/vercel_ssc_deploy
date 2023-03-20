import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar1 from './Navbar';
import Footer from './Footer';
import LoginName from './LoginName';
import skybg from '../../src/images/pgbg.jpg';
function Join(){
    
    return(
        <div style={{backgroundColor:"#DCEDC8"}}>
            <Navbar1/>
            {/* <LoginName/> */}
            <div >

            <Form className="form">
                <center>
                <Form.Text className="text-muted">
                We'll never share your details with anyone else.
                </Form.Text>
                </center>
                <form action="https://formsubmit.co/el/tiwame" method="POST" />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail" action="shubhradipsarkar@gmail.com" method="post" enctype="text/plain">
                <Form.Label>Guardian's Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Guardian's Name" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full address</Form.Label>
                <Form.Control type="text" placeholder="Enter Full address" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Pin no.</Form.Label>
                <Form.Control type="text" placeholder="eg: 741404" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="text" placeholder="eg: 01/01/2001" />
                
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Highest degree acheived</Form.Label>
                <Form.Control type="text" placeholder="eg: BSc, MSc, BA, MA, BTech" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Occupation</Form.Label>
                <Form.Control type="text" placeholder="Enter Occupation" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>mobile no.</Form.Label>
                <Form.Control type="text" placeholder="Enter mobile no" />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="eg: abc@gmail.com" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Blood group</Form.Label>
                <Form.Control type="text" placeholder="eg: O-" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Why join us?</Form.Label>
                <Form.Control type="text" placeholder=" Atleast 10 words" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I confirm every details" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
            <Footer/>
        </div>
    )
}
export default Join;



