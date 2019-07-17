import React, { Component } from 'react';
import './Signup.css';
import { Link } from "react-router-dom";


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      pseudo: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }

  handleSubmit(e) {
    var that = this;
    console.log(this.state)
    e.preventDefault();
    //var self = this;
    fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    }).then(function (res) {
      if (res.status == 201) {
            that.props.history.push('/signin')
            // return res.text();
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
      <div className="Signup">

        <div className="div-signup">
          <div className="left-row">
            <img src="/assets/images/sign.svg" className="sign" alt="signup logo" />
            <h1 className="title-signup">Sign Up</h1>
          </div>

          <form onSubmit={this.handleSubmit} autoComplete="off">
    
            <div className="row-signup">
    
                  <div className="column-left">
                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">First name</label>
                  </div>
                  <input type="text" className="form-control" name="firstname" value={this.state.firstname} onChange={this.handleChange}></input>
                  </div>
                

              

                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">Last name</label>
                  </div>
                  <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.handleChange}></input>
                  </div>
          

      
                
                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">Pseudo</label>
                  </div>
                  <input type="text" className="form-control" name="pseudo" value={this.state.pseudo} onChange={this.handleChange}></input>
                  </div>
                  </div>
              
              
        
                  <div className="column-right">
                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">Email</label>
                  </div>
                  <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}></input>
                  </div>

 
                
                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">Password</label>
                  </div>
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}></input>
                  </div>

                
		

                  <div className="form-group">
                  <div className="left-row">
                  <label className="second-title-signup">Confirm password</label>
                  </div>
                  <input type="password" className="form-control" name="confirmpassword"></input>
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
                  </div>
                  </div>
    
   
    );
  }

}