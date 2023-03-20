import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ScienceClub from './ScienceClub'
import About from './About'
import OurPurpose from './OurPurpose'
import {Route, Routes} from 'react-router-dom'
import Join from './Join'
import Login from './Login'
import Signup from './Signup'
import ViewBoy from './ViewBoy'
import Donate from './Donate'
import Photogalary from './Photogalary'
import Contacthelpdesk from './Contacthelpdesk'

function Uapp(){
    return(
       
        <BrowserRouter>
         
            <Routes>
                <Route  path='/' element={<ScienceClub/>}/>
                <Route  path='/about' element={<About/>}/>
                <Route  path='/purpose' element={<OurPurpose/>}/>
                <Route  path='/join' element={<Join/>}/>
                <Route  path='/login' element={<Login/>}/>
                <Route  path='/signup' element={<Signup/>}/>
                <Route  path='/ViewBoy' element={<ViewBoy/>}/>
                <Route  path='/donate' element={<Donate/>}/>
                <Route  path='/join' element={<Donate/>}/>
                <Route  path='/photogalary' element={<Photogalary/>}/>
                <Route  path='/contact' element={<Contacthelpdesk/>}/>
            </Routes>
            
            
        </BrowserRouter>
        
    )
}
export default Uapp