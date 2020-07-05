return (
    <div className="App">
      <Particles className="particles-style" 
                params={particlesOptions} />
      
      <Navigation  OnRouteChange ={this.OnRouteChange}/>

      if(this.state.route === 'signin'){
        <div>
           <SignIn OnRouteChange ={this.OnRouteChange} />
          </div>
         }
        else if (this.state.route === 'signin'){
        <div>
          <Register />
          <Logo />
          <ImageLinkForm className="center" OnInputChange={this.OnInputChange} OnButtonSubtmit={this.OnButtonSubtmit}/>
          <FaceRecognition box = {this.state.box} imageURL={this.state.imageURL}/>
        </div>
        }




render(){

     if(this.state.route === 'home'){
      return(
        <div className="App">
            <Particles className="particles-style" 
                      params={particlesOptions} />
            
            <Navigation  OnRouteChange ={this.OnRouteChange}/>
            <Logo />
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
              <Navigation  OnRouteChange ={this.OnRouteChange}/>
             <SignIn OnRouteChange ={this.OnRouteChange} />
          </div>
        );
      }

      else if (this.state.route === 'register'){
        return(
        <div className="App">
            <Particles className="particles-style" 
                      params={particlesOptions} />
              <Navigation  OnRouteChange ={this.OnRouteChange}/>
             <Register />
          </div>
        );
      }

}