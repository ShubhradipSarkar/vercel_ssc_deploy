import React from "react";
import Navbar1 from "./Navbar";
import Footer from "./Footer";

function Blank(){
    return(
        <div>
            <Navbar1/>
            <div className="minheight">
                <h1 style={{color:'white'}}>hi</h1>
                
            </div>
            <Footer/>
        </div>
    )
}
export default Blank;