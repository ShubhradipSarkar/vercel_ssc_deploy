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
import Photogallery from './Photogallery'
import Contacthelpdesk from './Contacthelpdesk'
import Card_movements from './Card_movements'
import image1 from "../../src/images/IMG_2759.jpg";
import Blank from './Blank';
import Work2006 from './work2006'
import Work2007 from './work2007'


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
                <Route  path='/photogallery' element={<Photogallery/>}/>
                <Route  path='/contact' element={<Contacthelpdesk/>}/>
                <Route  path='/contact' element={<Contacthelpdesk/>}/>
                <Route  path='/poribesh' element={<Card_movements image={image1} title="card " text1="My name is ChatGPT, and I am an  AI 
                language model and effectively, and I have been trained on a massive amount of text data from various sources such as books, articles, and websites. My creators designed me to be versatile and adaptable, allowing me to handle a wide range of tasks, including writing essays, composing emails, answering customer service queries, and even creating art and music.

                Despite being an AI" text2="and effectively, and I have been trained on a massive amount of text data from various sources such as books, articles, and websites. My creators designed me to be versatile and adaptable, allowing me to handle a wide range of tasks, including writing essays, composing emails, answering customer service queries, and even creating art and music.

Despite being an AI language model, I am continuously learning" text3 = "and improving my abilities through a process called deep learning. This involves analyzing and processing vast amounts of data to recognize patterns"/>}/>
                <Route  path='/blank' element={<Blank/>}/>
                <Route  path='/work2006' element={<Work2006/>}/>
                <Route  path='/work2007' element={<Work2007/>}/>
            </Routes>
            
            
        </BrowserRouter>
        
    )
}
export default Uapp