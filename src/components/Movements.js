import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link, NavLink} from "react-router-dom";
function Movement() {
  return (
    <>
     


    <Dropdown >
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" className="w-100">
      আন্দোলনের ধারাসমূহ <br/> CATEGORIES OF MOVEMENT
        </Dropdown.Toggle>
        <Dropdown.Menu variant="white">
      <Link to="/poribesh" style={{ textDecoration: 'none' }}><Dropdown.Item as="button" variant='dark'>পরিবেশ আন্দোলন </Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">যুক্তিবাদী আন্দোলন </Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">জন শিক্ষা আন্দোলন</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">বিজ্ঞান জনপ্রিয়করন আন্দোলন</Dropdown.Item></Link>
      
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}

export default Movement;