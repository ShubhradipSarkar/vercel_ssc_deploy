import React from 'react';
import Navbar1 from './Navbar';
import Footer from './Footer';

const Card = ({ image, title, text1, text2, text3 }) => {
  return (
    <div>
        <Navbar1/>
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} className="picturegraphy"/>
        <p>{text1}</p>
      </div>
      <div className="card-text">
        
        
        <p>{text2}</p>
        <p>{text3}</p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Card;

