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
      <Link to="/work2019" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2019 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2018" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2018 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2017" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2017 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2016" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2016 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2015" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2015 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2014" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2014 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2013" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2013 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2012" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2012 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2011" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2011 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2010" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2010 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2009" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2009 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2008" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2008 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2007" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2007 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/work2006" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2006 এর আন্দোলন</Dropdown.Item></Link>
      <Link to="/blank" style={{ textDecoration: 'none' }}><Dropdown.Item as="button">2005 এর আন্দোলন</Dropdown.Item></Link>
      
      </Dropdown.Menu>
    </Dropdown>
      
    
    </>
  );
}

export default HistoryofMovement;