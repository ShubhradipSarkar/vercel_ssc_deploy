import React from "react";
import Navbar1 from "./Navbar";
import Footer from "./Footer";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

function Photogallery() {
  return (
    <div>
      <Navbar1 /> 
      <MDBRow className="m-2 p-2">
      <h2 className="text-bold text-white  w-100 center mb-3" style={{textAlign:"center"}}> Our Gallery</h2>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>  

 
      <Footer />
    </div>
  );
}
export default Photogallery;
