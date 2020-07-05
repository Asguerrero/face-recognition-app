import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import FaceRecognition from './Components/FaceRecognition';
import Logo from './Components/Logo';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import Rank from './Components/Rank';
import ImageLinkForm from './Components/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';



const app = new Clarifai.App({
 apiKey: '3c3f9695615d4461b1601fce9415cd76'
});


const initialState ={

      input:'',
      imageURL:'',
      box:{},
      route: 'signin',
      isSignedIn: 'false',
      user:{
        id: '',
        name: '',
        email: '',  
        entries: 0,
        joined:''}

}

const particlesOptions ={

                    particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              }

class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      input:'',
      imageURL:'',
      box:{},
      route: 'signin',
      isSignedIn: 'false',
      user:{
        id: '',
        name: '',
        email: '',  
        entries: 0,
        joined:''

      }
    }
  }

loadUser = (data) =>{
  this.setState({
    user:{
        id: data.id,
        name: data.name,
        email: data.email,  
        entries: data.entries,
        joined: data.joined
    }
  })
}
componentDidMount(){
  fetch('http://localhost:3000')
  .then(response => response.json())
  .then(console.log)
}

calculateFaceLocation=(data) =>{
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('ImageToCalculate');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width ),
      bottomRow: height -(clarifaiFace.bottom_row * height)
    }
  
  }
  DisplayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }


  OnInputChange = (event) =>{
    this.setState({input: event.target.value});

  }

  OnButtonSubtmit = () =>{
    this.setState({imageURL: this.state.input});
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response => {
      if (response){
        fetch('http://localhost:3000/image',{
          method: 'put',
          headers:{'Content-type': 'application/json'},
          body:JSON.stringify({
          id : this.state.user.id
      
             })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))
        })

      }

      
      this.DisplayFaceBox (this.calculateFaceLocation(response))

    })
    .catch(err => console.log(err));

  }
  
  OnRouteChange = (route) => {
    
    if(route === 'signout'){
      this.setState(initialState);
      this.setState({route: 'signin'});
    }
    if(route ==='signin' || route ==='register'){
      this.setState({isSignedIn: 'false'});
       this.setState({route: route});
    }
    else if(route === 'home') {
      this.setState({isSignedIn: 'true'});
      this.setState({route: 'home'});
    }

   
  }




render(){

     if(this.state.route === 'home'){
      return(
        <div className="App">
            <Particles className="particles-style" 
                      params={particlesOptions} />
            
            <Navigation  OnRouteChange ={this.OnRouteChange} isSignedIn={this.state.isSignedIn}/>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm className="center" OnInputChange={this.OnInputChange} OnButtonSubtmit={this.OnButtonSubtmit}/>
            <FaceRecognition box = {this.state.box} imageURL={this.state.imageURL}/>
        </div>
        );
     }  

      else if (this.state.route === 'signin'){
        return(
        <div className="App">
            <Particles className="particles-style" 
                      params={particlesOptions} />
              <Navigation  OnRouteChange ={this.OnRouteChange} isSignedIn={this.state.isSignedIn}/>
             <SignIn OnRouteChange ={this.OnRouteChange} loadUser={this.loadUser} />
          </div>
        );
      }

      else if (this.state.route === 'register'){
        return(
        <div className="App">
            <Particles className="particles-style" 
                      params={particlesOptions} />
              <Navigation OnRouteChange ={this.OnRouteChange} isSignedIn={this.state.isSignedIn}/>
             <Register OnRouteChange ={this.OnRouteChange} loadUser={this.loadUser}/>
          </div>
        );
      }

}
}


export default App;
