import React, { Component } from 'react';
import './Signin.css';
import { BrowserRouter as Link } from "react-router-dom";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(e) {
    var that = this;
    e.preventDefault();
    fetch('/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    }).then(function (res) {    
        if (res.status == 201) {
          that.props.history.push('/catalog')
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

        <div className="div-signin">
          
          <div className="container-signin">
            <div className="left-row-signin">
            <img src="/assets/images/sign.svg" className="sign" alt="signup logo"/>
              <h1 className="title-signin">Sign In</h1>
            </div>

            <form onSubmit={this.handleSubmit} autoComplete="off">
    
              <div className="row-signin">
    
                  <div className="column-left">
              
                  <div className="form-group">
                  <div className="left-row-signin">
                  <label className="second-title-signin">Email</label>
                  </div>
                  <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}></input>
                  </div>
          
                  <div className="form-group">
                  <div className="left-row-signin">
                  <label className="second-title-signin">Password</label>
                  </div>
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}></input>
                  </div>

                  </div>
  
          
              </div>
         
              <div className="line-signin"></div>
              <div className="left-row-signin">
                <button type="submit" className="button-signin" href='#'>Sign In</button>
              </div>
            </form>
    
   
            <div className="left-row-signin">
              <p className="first-paragraphe-signin">Need an account? <Link to="/Signup"><a href="/Signup">Sign Up</a></Link></p>
            </div>
            <div className="left-row-signin">
              <p className="second-paragraphe-signin">Or go <Link to="/"><a href="/">Home</a>.</Link></p>

            </div>
            </div>
            </div>
            </div>
   
    )

  }
}
