import React from 'react';

const Rank =({name, entries}) => {
  return (
    <div className='center' > 
    	<p className=' f4 center'>{`${name} , your current rank is ${entries}`}</p>
    </div>
         
  );
}

export default Rank;