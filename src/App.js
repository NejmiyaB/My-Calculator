import React, { Component } from 'react';
//import logo from './logo.svg';
import Display from './components/display.js';

//import Button from './components/button';
import Buttons from './components/buttons';
import * as math from 'mathjs'
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state ={ 
      total:""
    }
  }
  
  

  onButtonDisplay = (input) =>{
    
  this.setState({total:input})
//console.log(this.state.operators);
  }
 
  reset = ()=>{
    this.setState({total:''})
  }
  backspace = () =>{

this.setState({total:this.state.total.slice(0, -1)})
  }
buttonClicked =(buttonName)=>{
  if(buttonName === '='){
    this.calculate()
  }else if(buttonName === 'C'){
    this.reset();
  }else if(buttonName === 'CE'){
    this.backspace()
}
 else{ 
  this.setState({
    total:this.state.total + buttonName
  })

  };
}
  calculateTotal =()=>{
    
     try{
      this.setState({
        // eslint-disable-next-line
        total:eval(this.state.total)
        });
 }catch(err){
  this.setState({total:"error"});
 }
   };

  render(){
    
    return( 
      <div>

      <Display onButtonDisplay={this.onButtonDisplay} display={this.state.total} />

     <Buttons butttonClicked={this.Clicked} />
      
     
      </div>
      )
  }
 
   
}

export default App;
