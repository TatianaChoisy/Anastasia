import React, { Component } from 'react';
import './Signup.css';
import { Jumbotron } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      email2: '',
      password: '',
      password2: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  
  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }




  render() {
    return (
      <div className="Signup">

        <Jumbotron className="jumbotron-signup">
          <div className="left-row">
            <img src="assets/sign.svg" className="sign" alt="signup logo" />
            <h1 className="title-signup">Sign Up</h1>
          </div>

          <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
    
            <div className="row-signup">
    
              <div className="column-left">
              <div className="form-group">
            
                  <div className="left-row">
                  <label className="second-title-signup">First name</label>
                  </div>
                  <input type="firstname required" className="form-control" name="firstname" value={this.state.firstname} onChange={this.handleChange}></input>
                  </div>
          
                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">Password</label>
                  </div>
                  <input type="password required" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}></input>
                  </div>
          
                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">Email</label>
                  </div>
                  <input type="email required" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}></input>
                  </div>

                  </div>
        
                  <div className="column-right">
                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">Last name</label>
                  </div>
                  <input type="lastname required" className="form-control" name="lastname" value={this.state.lastname} onChange={this.handleChange}></input>
                  </div>
		

                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">Confirm password</label>
                  </div>
                  <input type="password required" className="form-control" name="passwordConfirm" value={this.state.password2} onChange={this.handleChange}></input>
                  </div>
      
        
                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">Confirm email</label>
                  </div>
                  <input type="email required" className="form-control" name="confirm-email" value={this.state.email2} onChange={this.handleChange}></input>
                  </div>
          
                  </div>
                  </div>
                  <div className="line-signup"></div>
                  <div className="left-row">
                  <button type="submit" className="button-signup" href='#'>Sign Up</button>
                  </div>
                  </form>
    
   
                  <div className="left-row">
                  <p className="first-paragraphe-signup">Already have an account? <Link to="/Signin">Sign In</Link></p>
                  </div>
                  <div className="left-row">
                  <p className="second-paragraphe-signup">Or go <Link to="/">Home.</Link></p>
                  </div>
                  </Jumbotron>
                  </div>
    
   
    );
  }

}