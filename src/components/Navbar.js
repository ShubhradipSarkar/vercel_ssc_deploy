import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link, NavLink} from "react-router-dom";
import Movement from './Movements';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import About from './About';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./style.css";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import PresentMovement from './PresentMov';
import HistoryofMovement from './HistoryofMovements';
import Photogalary from './Photogalary';
import Card from "./Cards";
import image1 from '../../src/images/IMG_2759.jpg';


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
    <div >
           
    
      <div style={{backgroundColor:'white'}}>
      
      <div className='alltop'>
      <div className='top'><img src={require('../../src/images/LOGO.png')} alt="logo" /> <div><h1 style={{color:'black',margin:'3px'}}>  শান্তিপুর সায়েন্স ক্লাব</h1> <Link to='/' style={{textDecoration:'none'}}><div className='name'><h5><span style={{color:'green'}}> Santipur </span><span style={{color:'#1B5E20'}}> Science </span> <span style={{color:'black'}}> Club</span> <span style={{color:'black',fontWeight:'bold'}}> (ESTD.-1982)</span></h5></div>
        </Link></div></div>
      <center> <div style={{margin:'15px',fontFamily:'cursive',fontSize:'14',fontWeight:'bold',color:'#1B5E20'}}>বাংলার জনবিজ্ঞান আন্দোলনে একটি পথিকৃত সংগঠন | A PIONEER PEOPLE'S SCIENCE ORGANIZATION OF BENGAL</div>  </center>
      
      </div>
      </div>
    
      <Navbar className="nav "  expand="lg" sticky="top">
        <Container className="container">
            {/* \\\\\\\\\\\\\\\\\\\Navbar Backup\\\\\\\\\\\\\\\\\\\\\\ */}
        {/* <div className='toplogo'><div className="logo"><img src={require('../../src/images/LOGO.png')} alt="logo" /></div> <h1 style={{color:'black', padding:'8px'}}>  শান্তিপুর সায়েন্স ক্লাব</h1></div> */}
        {/* <Navbar.Brand href="/" className="name">Santipur Science Club</Navbar.Brand> */}
        
        
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between">
          {/* <Link to="/" ><Button type="button" variant="info" className="navElements"><center>Home </center></Button></Link> 
            
            <Link to="/about" ><Button type="button"  color="white" className="navElements"><center>About</center></Button></Link> 
             */}
            {/* <Link to="/purpose" className="navElements"><Button type="button" variant="info" className="navElements"><center>Purpose</center></Button></Link> */}
            {/* <Link to="/join" className="navElements"><Button type="button" variant="info" className="navElements"><center>Join </center></Button></Link>
            <Link to="/donate" className="navElements"><Button type="button" variant="info" className="navElements"><center>Donate</center></Button></Link> */}
            {/* <Button href="/login" className="navElements">sign in</Button> */}
            {/* <Link to="/login" className="navElements"><Button type="button" variant="primary" className="navElements"><center>Login</center></Button></Link> */}
            <Link to="/about" className="navElements"><Button type="button" variant="primary" className='w-100'>সংক্ষিপ্ত পরিচয় <br/> ABOUT US</Button></Link>
            <Link to="" className="navElements"><div className="w-100"><Movement /></div></Link>
            <Link to="" className="navElements"><PresentMovement className='w-100'/></Link>
            <Link to="" className="navElements"><HistoryofMovement className='w-100'/></Link>
            <Link to="/photogalary" className="navElements"><Button type="button" variant="primary" className='w-100'>ফটো গ্যালারি <br/> PHOTO GALLERY</Button></Link>
            <Link to="/contact" className="navElements"><Button type="button" variant="primary" className='w-100' >যোগাযোগ <br/>CONTACT</Button></Link>
            
            
            
            {/* <div className='bu'><Movement />
            <div className='buu'><PresentMovement /></div>
            </div> */}
            
            
            
          </Nav>
          </Navbar.Collapse>
          
        </Container>
        
      </Navbar>
      <div className='nameatfront'><center><h4 className='nameofnav'>Hello {userName}</h4></center></div>
      
    </div>
  );
}

export default Navbar1;