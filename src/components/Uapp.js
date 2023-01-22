import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ScienceClub from './ScienceClub'
import About from './About'
import OurPurpose from './OurPurpose'
import {Route, Routes} from 'react-router-dom'
import Join from './Join'
import Login from './Login'
import Signup from './Signup'
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
            </Routes>
            
        </BrowserRouter>
    )
}
export default Uapp