import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link, NavLink} from "react-router-dom";
function PresentMovement() {
  return (
    <>
      <Dropdown>
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" className="w-100">
      বর্তমান কর্মসূচি নিয়মিত <br/> CURRENT MOVEMENTS
        </Dropdown.Toggle>
        <Dropdown.Menu variant="white">
      <Link to="/poribesh" style={{ textDecoration: 'none' }}><Dropdown.Item as="button" variant='dark'>বিদ্যালয় সংযোগ কর্মসূচি</Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">গ্রামে গ্রামে প্রোগ্রাম </Dropdown.Item></Link>
      <Link to="/join" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">বৃক্ষ রোপন </Dropdown.Item></Link>
      </Dropdown.Menu>
      </Dropdown>
     
    </>
  );
}

export default PresentMovement;