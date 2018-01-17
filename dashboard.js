import React from 'react';

export default class Dashboard extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
		this.name=props.name;
	}
	render(){
		return(
			<div>
				<h1>Hello {this.name}</h1>
				<h2>Welcome</h2>
			</div>
		);
	}
}