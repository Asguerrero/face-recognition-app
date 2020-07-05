import React from 'react';

function ImageLinkForm({OnInputChange, OnButtonSubtmit}) {
  return (
    <div className='center' > 
	    <p className='f3 center' >Detect faces in your pictures. Give it a try!</p>
	    <div className=''>
	    	<div className='center pa4 br3 shadow-5'>
			    <input className='f4 pa2 w-50 center'type='tex' onChange={OnInputChange}/>
			    <button className='center w-35 grow f4 link ph3 pv2 dib white bg-dark-blue'
			    onClick={OnButtonSubtmit}
			    >Detect </button>
			</div>

	    </div>
    </div>
         
  );
}

export default ImageLinkForm;