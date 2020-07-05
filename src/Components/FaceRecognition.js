import React from 'react';
import './FaceRecognition.css'

function FaceRecognition({box, imageURL}) {
  return (
    <div className="mycenter">
    	<div className ='absolute mt2'>
	    	<img id ='ImageToCalculate' alt='' src={imageURL} width='500px' height="auto"/>
	    	<div style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol}} className='bounding-box' ></div>
		</div>
    </div>

         
     
  );
}

export default FaceRecognition;