import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link, NavLink} from "react-router-dom";
import About from './About';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./style.css";
import { auth } from "./firebase";
import { useEffect, useState } from "react";




function Navbar1(props) {
    
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        
      } else setUserName("");
      
    });
  }, []);
  return (
    <>
    
      <Navbar className="nav"  expand="lg">
        <Container className="container">
            <div className="logo"><img src={require('../../src/images/LOGO.png')} alt="logo" /></div>
        
        <Navbar.Brand href="#home" className="name">Santipur Science Club</Navbar.Brand>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="navElements">Home</Link>
            <Link to="/about" className="navElements">About</Link>
            <NavLink to="/purpose" className="navElements">Our Purpose</NavLink>
            <NavLink to="/join" className="navElements">Join Us</NavLink>
            <Nav.Link href="/donate" className="navElements">Donate</Nav.Link>
            {/* <Button href="/login" className="navElements">sign in</Button> */}
            <Link to="/login">
     <button type="button" className="navElements">
          Sign in
     </button>
     
 </Link>
 
          </Nav>
          </Navbar.Collapse>
          <h3 className='nameatfront'>Hello {userName} !</h3>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbar1;
