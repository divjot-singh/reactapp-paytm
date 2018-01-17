import React from 'react';

export default class Form extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			email:'',
			password:'',
			nameValid:true,
			emailValid:true,
			passwordValid:true,
			formValid:true
		}
	}
	ValueChange(e){
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.name+"Valid"]:true
		});
		if(e.target.name=="name"){
			if(e.target.value.length<5)
			{
				this.setState({
					nameValid: false
				});
			}
		}
		if(e.target.name=="email"){
			 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			if(!re.test(e.target.value.toLowerCase()))
			{
				this.setState({
					emailValid: false
				});
			}
		}
		if(e.target.name=="password"){
			if(e.target.value.length<5)
			{
				this.setState({
					passwordValid: false
				});
			}
		}
	}
	onSubmitForm(e){
		console.log(this.props);
		e.preventDefault();
		if(!(this.state.email=="div1495@gmail.com" && this.state.password=="password123" && this.state.nameValid)){
			this.setState({
				formValid:false,
				email:'',
				password:''
			});
		}
		else{
			this.props.SubmitForm(true,this.state.name);
		}
	}
	render(){
		return(
			<form action="">
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input id="name" name="name" type="text" className="form-control form-fields" required="true" placeholder="Name" value={this.state.name} onChange={e=> this.ValueChange(e)} />
					{!this.state.nameValid && <span className="name-error" >Please specify a valid username (minimum 5 characters)</span>}
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input id="email" name="email" className="form-control form-fields" type="email" required="true" placeholder="Email" value={this.state.email} onChange={e=> this.ValueChange(e)} />
					{!this.state.emailValid && <span className="name-error" >Please specify a valid email address</span>}
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input id="password" name="password" className="form-control form-fields" type="password" required="true" placeholder="Password" value={this.state.password} onChange={e=> this.ValueChange(e)} />
					{!this.state.passwordValid && <span className="name-error" >Please specify a valid password (minimum 5 characters)</span>}
				</div>
				<div className="form-group">
					<button onClick={e=>this.onSubmitForm(e)} className="btn btn-primary form-control">Submit</button>
				</div>
				{!this.state.formValid && <div className="form-error"><h2>Something went wrong. Credentials are not correct</h2> </div>}
			</form>
		);
	}
}