import React from 'react'
import People from './People';
import './style.css'
import soumya from '../../src/images/soumya.jpg';
import riki from '../../src/images/riki.jpg';
import sankho from '../../src/images/sankho.jpg';
import errpic from '../../src/images/errpic.png';
// import { AppProvider } from './context/Peopledata';
// import soumya from '../../src/images/soumya.jpg';
// import soumya from '../../src/images/soumya.jpg';
function Group(){
    return(
        
        <div className="peepgroup">
            
            <center ><div className='leafx'><h1>Meet <span className='span'>The</span>Team</h1> <div><img src={require('../../src/images/leaf.png')} alt="" className='leaf'/></div></div> </center>
            <div className="peeps">
                <People name="Soumyajit" designation="junior co." dp={soumya} className="indi" />
                <People name="Shubhradip" designation="junior co."dp={riki} className="indi" id="http://localhost:4000/mens/63dbc30e111eb24d96a42083"/>
                <People name="Sankho" designation="Project co." dp={sankho} className="indi"/>
                <People name="rajdeep" designation="sompadok"  dp={errpic} className="indi"/>
                
            </div>
            <div className="peeps">
                <People name="sankho" designation="project co" dp={errpic} className="indi"/>
                <People name="Soumyajit" designation="junior co."dp={errpic} className="indi"/>
                <People name="tamo" designation="lol" dp={errpic} className="indi"/>
                <People name="subrata" designation="sovapoti"dp={errpic}  className="indi"/>
            </div>
            <div className="peeps">
                <People name="sankho" designation="project co" dp={errpic} className="indi"/>
                <People name="soumya" designation="nothing" dp={errpic} className="indi"/>
                <People name="tamo" designation="lol" dp={errpic} className="indi"/>
                <People name="subrata" designation="sovapoti" dp={errpic} className="indi"/>
                
                
            </div>
            <div className="peeps">
                <People name="sankho" designation="project co" dp={errpic}  className="indi"/>
                <People name="soumya" designation="nothing" dp={errpic} className="indi"/>
                <People name="tamo" designation="lol" dp={errpic} className="indi"/>
                <People name="subrata" designation="sovapoti" dp={errpic} className="indi"/>
                
               
            </div>
            <div>
            <People name="sankho" designation="project co" dp={errpic} className="indi"/>
            <People name="sankho" designation="project co" dp={errpic} className="indi"/>
            </div>

        </div>
             
    )
}
export default Group;