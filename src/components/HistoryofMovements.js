import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link, NavLink} from "react-router-dom";
function HistoryofMovement() {
  return (
    <>
      <Dropdown>
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" className="w-100">
      আন্দোলনের ইতিহাস <br/> HISTORY OF MOVEMENTS
        </Dropdown.Toggle>
        <Dropdown.Menu variant="white">
      
      <Link to="/poribesh" style={{ textDecoration: 'none' }}><Dropdown.Item as="button" variant='dark'>2020 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2019 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2018 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2017 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2016 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2015 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2014 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2013 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2012 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2011 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2010 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2009 এর আন্দোলন</Dropdown.Item></Link>
      
      </Dropdown.Menu>
    </Dropdown>
      
    
    </>
  );
}

export default HistoryofMovement;