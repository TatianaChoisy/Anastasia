import React, { Component } from 'react';
import './Signup.css';
import { Jumbotron } from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      email2: '',
      password: '',
      password2: '',
      token: ''
    };

    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(event) {
    event.preventDefault();
    fetch("/signup", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    }).then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function (data) {
        console.log(data)
        if (data == "success") {
            this.setState({ msg: "Thanks for registering" });
        }
    }).catch(function (err) {
        console.log(err)
    });
}




  render() {
    return (
      <div className="Signup">

        <Jumbotron className="jumbotron-signup">
          <div className="left-row">
          <img src="assets/sign.svg" className="sign" alt="signup logo"/>
            <h1 className="title-signup">Sign Up</h1>
          </div>

          <form onSubmit={this.onSubmit} autoComplete="off" method="POST">
    
            <div className="row-signup">
    
              <div className="column-left">
                <div className="form-group">
            
                  <div className="left-row">
                    <label className="second-title-signup">First name</label>
                  </div>
                  <input type="firstname required" class="form-control" name="firstname" value={this.state.firstname} onChange={e => this.setState({ firstname: e.target.value })}></input>
                </div>
          
                <div className="form-group">
                  <div className="left-row">
                    <label className="second-title-signup">Password</label>
                  </div>
                  <input type="password required" class="form-control" name="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></input>
                </div>
          
                <div className="form-group">
                  <div className="left-row">
                    <label className="second-title-signup">Email</label>
                  </div>
                  <input type="email required" class="form-control" name="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                </div>

              </div>
        
              <div className="column-right">
                <div className="form-group">
                  <div className="left-row">
                    <label className="second-title-signup">Last name</label>
                  </div>
                  <input type="lastname required" class="form-control" name="lastname" value={this.state.lastname} onChange={e => this.setState({ lastname: e.target.value })}></input>
                </div>
		

                <div className="form-group">
                  <div className="left-row">
                    <label className="second-title-signup">Confirm password</label>
                  </div>
                  <input type="password required" class="form-control" name="passwordConfirm" value={this.state.password2} onChange={e => this.setState({ password2: e.target.value })}></input>
                </div>
      
        
                <div className="form-group">
                  <div className="left-row">
                    <label className="second-title-signup">Confirm email</label>
                  </div>
                  <input type="email required" class="form-control" name="confirm-email" value={this.state.email2} onChange={e => this.setState({ email2: e.target.value })}></input>
                </div>
          
              </div>
            </div>
            <div className="line"></div>
            <div className="left-row">
              <button type="submit" className="button-signup" href='#'>Sign Up</button>
            </div>
          </form>
    
   
          <div className="left-row">
            <p className="first-paragraphe-signup">Already have an account? <Link to="/Subscribe/"><a href="/Signin">Sign In</a></Link></p>
          </div>
          <div className="left-row">
            <p className="second-paragraphe-signup">Or go <Link to="/"><a href="/">Home</a>.</Link></p>
          </div>
        </Jumbotron>
      </div>
    
   
    );
  }
}
