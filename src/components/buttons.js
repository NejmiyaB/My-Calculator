import React, {Component} from 'react';

class Buttons extends Component{
 	// buttonPressed =(e) =>{
 	// 	this.props.buttonPressed(e.target.value);
 	// }
 		onButtonClicked =(e)=>{
 	let store = this.props.buttonClicked
 	store(e.target.value);
 	}
  render() {
    return (
    <div className="db center tl tc">
    <div className="layer tc">
    	<button className="b ma1 bg-green tc" onClick={this.onButtonClicked}  value="(">
    	(</button>
    	<button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="C">C</button>
    	<button className="b ma1 w-15 bg-green " onClick={this.onButtonClicked}  value="CE">CE</button>
    	<button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}   value=")">)</button>
          <button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="7">7</button>
          <button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="8">8</button>
          <button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="9">9</button>
          <button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="4">4</button>
          <button className="b ma1 w-15 bg-green"  onClick={this.onButtonClicked} value='/'>/</button>
          <button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="5">5</button>
          <button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="6">6</button>
          <button className="b ma1 w-15 bg-green" value='*' onClick={this.onButtonClicked}>x</button>
          <button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="1">1</button>
          <button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="2">2</button>
          <button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="3">3</button>
          <button className="b ma1 w-15 bg-green"  onClick={this.onButtonClicked} value='-'>-</button>
          <button className="b ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="0">0</button>
          <button className="b dot ma1 w-15 bg-green " onClick={this.onButtonClicked} value=".">.</button>
          <button className="b e ma1 w-15 bg-green" onClick={this.onButtonClicked}  value="=">=</button>
          <button className="b a ma1 w-15 bg-green" value='+' onClick={this.onButtonClicked}>+</button>
         </div>
        </div>
        )
   
  }
}
export default Buttons;