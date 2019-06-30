import React, { Component } from 'react';
import './Signin.css';
import { Jumbotron } from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t_Pseudo: '',
      t_Password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(e) {
    console.log(this.state)
    e.preventDefault();
    //var self = this;
    fetch("/signin", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    }).then(function (res) {
        if (res.status == 201) {
            return res.text();
        }
    }).catch(function (err) {
        console.log(err);
    });

  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div className="Signin">

        <Jumbotron className="jumbotron-signin">
          
          <div className="container-signin">
            <div className="left-row">
            <img src="/assets/images/sign.svg" className="sign" alt="signup logo"/>
              <h1 className="title-signin">Sign In</h1>
            </div>

            <form onSubmit={this.handleSubmit} autoComplete="off">
    
              <div className="row-signin">
    
                  <div className="column-left">
              
                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signin">Pseudo</label>
                  </div>
                  <input type="text" className="form-control" name="t_Pseudo" value={this.state.t_Pseudo} onChange={this.handleChange}></input>
                  </div>
          
                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signin">Password</label>
                  </div>
                  <input type="password" className="form-control" name="t_Password" value={this.state.t_Password} onChange={this.handleChange}></input>
                  </div>

                  </div>
  
          
              </div>
         
              <div className="line-signin"></div>
              <div className="left-row">
                <button type="submit" className="button-signin" href='#'>Sign In</button>
              </div>
            </form>
    
   
            <div className="left-row">
              <p className="first-paragraphe-signin">Need an account? <Link to="/Signup"><a href="/Signup">Sign Up</a></Link></p>
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
