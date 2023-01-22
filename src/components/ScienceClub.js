// import React, { useEffect, useState } from "react";
import Navbar1 from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";


import { auth } from "./firebase";
// import Group from "./Group";
import './style.css'
import { useEffect, useState } from "react";
import image1 from '../../src/images/IMG_2759.jpg';
import image2 from '../../src/images/IMG_2790.jpg';
import image3 from '../../src/images/IMG_2995.jpg';
import image4 from '../../src/images/IMG_2756.jpg';
import image5 from '../../src/images/IMG_2995.jpg';
import image6 from '../../src/images/IMG_2756.jpg';
import LoginName from "./LoginName";
// import About from "./About";
// import OurPurpose from "./OurPurpose";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
function ScienceClub(){
    

    const [selectedImage, setSelectedImage] = useState(0)
    const [allImages, setAllImages] = useState([image1, image2, image3, image4 , image5, image6])

    useEffect(() => {
        setInterval(() => {
          setSelectedImage(selectedImage => selectedImage <= 3 ? selectedImage + 1 : 0)
          
        }, 4000)
      }, [])

    const [userName, setUserName] = useState("");
    // const [useremail, setUseremail] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        // setUseremail(user.disPlayemail);
      } else setUserName("");
      console.log(user);
    });
  }, []);
      
    return(
        <>
            {/* const use= {userName} ; */}
            
            <Navbar1 />
            {/* <h2>{userName}</h2> */}
            {/* <LoginName/> */}
            
            
            
            <div>
              <img  src={allImages[selectedImage]} className="slide" /> <br />
              <button
                onClick={() => {
                  if (selectedImage > 0)
                    setSelectedImage(selectedImage - 1)
                }}
              >PREV</button>

              <button
                onClick={() => {
                  if (selectedImage < allImages.length - 1)
                    setSelectedImage(selectedImage + 1)
                }}
              >NEXT</button>

            </div>

            {/* {console.log(userName)} */}
            {/* <h1>{useremail}</h1> */}
            <h1>science club</h1>
            <h1>science club</h1>
            <h1>science club</h1>
            <h1>science club</h1>
            <h1>science club</h1>
            <h1>science club</h1>
            <h1>science club</h1>
            <h1>science club</h1>
            <h1>science club</h1>
            <h1>science club</h1>
            <h1>science club</h1>
            <Footer/>
            

            
        </>
    )
}

export default ScienceClub;