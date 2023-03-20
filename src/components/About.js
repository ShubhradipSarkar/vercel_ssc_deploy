import React from 'react'
import Navbar1 from './Navbar'
import Footer from './Footer'
import Group from './Group'
import LoginName from './LoginName'
import { useContext } from 'react'
import {AppContext} from "../context/Peopledata";
import Feature from './Feature'
import skybg from '../../src/images/pgbg.jpg';
function About(){
    const name=useContext(AppContext);
    return(
        <div >
            <Navbar1/>
            {/* <LoginName/> */}
            <div >
            <Group/>
            <Feature/>
            {/* {name} */}
            this is the about page;
            </div>
            <Footer/>
        </div>
    )
}
export default About