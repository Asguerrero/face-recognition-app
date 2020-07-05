import React from 'react';

function Navigation({OnRouteChange, isSignedIn}) {

	if(isSignedIn ==='true') {
		return (
		<nav style={{display: 'flex', justifyContent: 'flex-end',  height: 100}}>
	    <p className= 'f3 link dim black underline pa3 pointer' onClick={()=> OnRouteChange('signout')} >Sign Out</p>
	    </nav>
			);
	}
  else {
    return (
    <nav style={{display: 'flex', justifyContent: 'flex-end',  height: 100}}>
    <p className= 'f3 link dim black underline pa3 pointer' onClick={()=> OnRouteChange('signin')} >Sign In</p>
    <p className= 'f3 link dim black underline pa3 pointer' onClick={()=> OnRouteChange('register')}>Register</p>
    </nav>
         );
  }
}

export default Navigation;
