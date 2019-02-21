import React , {Component} from 'react';

class Display extends Component{
//constructor(){
	//super()
	//this.state={ input: 0}

// onButtonAdd = (event) => {
// 	let button = document.getElementByTagName('button')
//     let span = button.getElementsByTagName('span')
// span.textContent = event.target.value;
// }

render(){
	//const number = this.props.data;
	return(
		
		<div className="container ba  tc center pa3  h-100 ">
		
		{this.props.display}
		
		
				
		</div>
		
		
		)
}
}
export default Display;