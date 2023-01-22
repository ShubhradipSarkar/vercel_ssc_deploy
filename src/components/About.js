import React from 'react'
import Navbar1 from './Navbar'
import Footer from './Footer'
import Group from './Group'
import LoginName from './LoginName'
function About(){
    return(
        <div>
            <Navbar1/>
            {/* <LoginName/> */}
            <Group/>
            this is the about page

            <Footer/>
        </div>
    )
}
export default About