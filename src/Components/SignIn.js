import React from 'react';


class SignIn extends React.Component {

constructor(props){
	super();
	this.state ={
		signInEmail: '',
		signInPassword:''
	}
}
onEmailChange =(event) =>{
	this.setState({signInEmail: event.target.value})
}

onPasswordChange =(event) =>{
	this.setState({signInPassword: event.target.value})
}

onSubmitSignIn = () =>{
	
	fetch('https://beautiful-congaree-25199.herokuapp.com/signin',{
		method: 'post',
		headers:{'Content-type': 'application/json'},
		body:JSON.stringify({
			email : this.state.signInEmail,
			password : this.state.signInPassword
			
			
		})
	})
	.then(response => response.json())
	.then(user => {
		if (user.id){
			this.props.loadUser(user);
			this.props.OnRouteChange('home');
		}
	})
	
	
}

	render(){
const{ OnRouteChange} = this.props;
  return (
    
    <article className="br5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
		    	<main className="pa4 black-80">
		  <div className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 " type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" for="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"onChange={this.onPasswordChange}/>
		      </div>
		    </fieldset>
		    <div className="center">
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" type="submit" value="Sign In" onClick={this.onSubmitSignIn}/>
		    </div>
		    <div className="lh-copy mt3 center ">
		      <p onClick={()=> OnRouteChange('register')} href="#0" className="f6 link dim black db center pointer">Register</p>
		     
		    </div>
		  </div>
		</main>
		</article>


  );

}
}

export default SignIn;