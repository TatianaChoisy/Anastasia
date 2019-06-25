import React, { Component } from 'react';
import './Signin.css';
import { Jumbotron } from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: ''
    };

    this.onSubmit = this.onSubmit.bind(this);

  }


  onSubmit(e) {
    console.log(this.state.password, this.state.email)
    e.preventDefault();
    var self = this;
    fetch("/signin", {
      method: 'POST',
      body: JSON.stringify(this.state)
    }).then(function (res) {
      if (res) {
        self.setState({ token: res })
        localStorage.setItem('token', self.state.token);
        window.location.reload();
    }
    })

  }

  render() {
    return (
      <div className="Signin">

        <Jumbotron className="jumbotron-signin">
          
          <div className="container-signin">
            <div className="left-row">
            <img src="assets/sign.svg" className="sign" alt="signup logo"/>
              <h1 className="title-signin">Sign In</h1>
            </div>

            <form action="/signin" method="post">
    
              <div className="row-signin">
    
                <div className="column-left">
              
                  <div className="form-group">
                    <div className="left-row">
                      <label className="second-title-signin">Email</label>
                    </div>
                    <input type="text" className="form-control" name="email"></input>
                  </div>
          
                  <div className="form-group">
                    <div className="left-row">
                      <label className="second-title-signin">Password</label>
                    </div>
                    <input type="password" className="form-control" name="password"></input>
                  </div>
          
    

                </div>
  
          
              </div>
         
              <div className="line"></div>
              <div className="left-row">
                <button type="submit" className="button-signin">Sign In</button>
              </div>
            </form>
    
   
            <div className="left-row">
              <p className="first-paragraphe-signin">Need an account? <Link to="/Subscribe/"><a href="/Signin">Sign In</a></Link></p>
            </div>
            <div className="left-row">
              <p className="second-paragraphe-signin">Or go <Link to="/"><a href="/">Home</a>.</Link></p>
            </div>
          </div>
        </Jumbotron>
      </div>
   
    )

  }
}
