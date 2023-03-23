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
            
            <div className='leafx'><h1 style={{color:'white'}}>Meet <span className='span'>The</span>Team</h1> <img src={require('../../src/images/coca-leaves.png')} alt="" className='leaf' /></div> 
            <div className="peeps">
                <People name="Soumyajit" designation="junior co." dp={soumya} className="indi" />
                <People name="Shubhradip" designation="junior co."dp={riki} className="indi" id="http://localhost:4000/mens/63dbc30e111eb24d96a42083"/>
                <People name="Sankho" designation="junior co." dp={sankho} className="indi"/>
                <People name="Raghunath" designation="Editor"  dp={errpic} className="indi"/>
                
            </div>
            <div className="peeps">
                <People name="Soumyajit" designation="junior co." dp={soumya} className="indi" />
                <People name="Shubhradip" designation="junior co."dp={riki} className="indi" id="http://localhost:4000/mens/63dbc30e111eb24d96a42083"/>
                <People name="Sankho" designation="junior co." dp={sankho} className="indi"/>
                <People name="Raghunath" designation="Editor"  dp={errpic} className="indi"/>
                
            </div>
            <div className="peeps">
                <People name="Soumyajit" designation="junior co." dp={soumya} className="indi" />
                <People name="Shubhradip" designation="junior co."dp={riki} className="indi" id="http://localhost:4000/mens/63dbc30e111eb24d96a42083"/>
                <People name="Sankho" designation="junior co." dp={sankho} className="indi"/>
                <People name="Raghunath" designation="Editor"  dp={errpic} className="indi"/>
                
            </div>
            <div className="peeps">
                <People name="Soumyajit" designation="Junior co." dp={soumya} className="indi" />
                <People name="Shubhradip" designation="Junior co."dp={riki} className="indi" id="http://localhost:4000/mens/63dbc30e111eb24d96a42083"/>
                <People name="Sankho" designation="Junior co." dp={sankho} className="indi"/>
                <People name="Raghunath" designation="Editor SSC"  dp={errpic} className="indi"/>
                
            </div>
            <div className="peeps">
                <People name="Soumyajit" designation="junior co." dp={soumya} className="indi" />
                <People name="Shubhradip" designation="junior co."dp={riki} className="indi" id="http://localhost:4000/mens/63dbc30e111eb24d96a42083"/>
                <People name="Sankho" designation="junior co." dp={sankho} className="indi"/>
                <People name="Raghunath" designation="Editor"  dp={errpic} className="indi"/>
                
            </div>
            <div className="peeps">
                <People name="Soumyajit" designation="junior co." dp={soumya} className="indi" />
                <People name="Shubhradip" designation="junior co."dp={riki} className="indi" id="http://localhost:4000/mens/63dbc30e111eb24d96a42083"/>
                <People name="Sankho" designation="junior co." dp={sankho} className="indi"/>
                <People name="Raghunath" designation="Editor"  dp={errpic} className="indi"/>
                
            </div>
            <div className="peeps">
                <People name="Soumyajit" designation="junior co." dp={soumya} className="indi" />
                <People name="Shubhradip" designation="junior co."dp={riki} className="indi" id="http://localhost:4000/mens/63dbc30e111eb24d96a42083"/>
                <People name="Sankho" designation="junior co." dp={sankho} className="indi"/>
                <People name="Raghunath" designation="Editor"  dp={errpic} className="indi"/>
                
            </div>
            {/* <div className="peeps">
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
            </div> */}

        </div>
             
    )
}
export default Group;