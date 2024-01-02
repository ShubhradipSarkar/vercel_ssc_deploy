import React from 'react';
import image1 from '../../src/images/IMG_2759.jpg'
export default function Hovercover() {
  return (
    <div className='hovereffect'>
      <img src={image1} className='firstimg' id="lol"/>
      {/* <div
        className='mask'
        style={{
          background: 'linear-gradient(45deg, red, blue 100%)',
        }}
      ></div> */}
      <div className="overlay">
        <div className="text">Hello World</div>
      </div>
    </div>
  );
}