import React from 'react';
import Tilt from 'react-tilt';
import Brain from '../Brain.png';

function Logo() {
  return (
    <div style={{ height: 70}} className='center' >
	    <Tilt className="Tilt" options={{ max : 50 }} style={{ height: 200, width: 200 }} >
		 	<div className="Tilt-inner"> <img alt= 'Logo' src={Brain} style={{width: '40%', height:'40%'}}/> </div>
		</Tilt>
    </div>
         
  );
}

export default Logo;
