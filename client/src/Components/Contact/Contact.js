import React, { Component } from 'react';
import './Contact.css';
import NavLeft from '../Catalog/Navigation/NavLeft';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pseudo: '',
          object: '',
          message: ''
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
    
      }
    
      handleSubmit(e) {
        var that = this;
        console.log(this.state)
        e.preventDefault();
        //var self = this;
        fetch('/contact', {
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
                
                 <div className="Contact">
                
                <NavLeft />
                
                <div className="container-contact">
          <div className="left-row">
            <img src="/assets/images/sign-white.svg" className="sign" alt="signup logo" />
            <h1 className="title-contact">Contact</h1>
          </div>

          <form onSubmit={this.handleSubmit} autoComplete="off">
    
            <div className="row-contact">
    
               <div className="group-contact">
                
                  <div className="form-group-contact">
                  <div className="left-row-contact">
                  <label className="second-title-contact">Pseudo</label>
                  </div>
                  <input type="text" className="form-control-pseudo" name="pseudo" value={this.state.pseudo} onChange={this.handleChange}></input>
                  </div>
                 
                

 
                
                  <div className="form-group-contact">
                  <div className="left-row-contact">
                  <label className="second-title-contact">Object</label>
                  </div>
                  <input type="object" className="form-control-contact" name="object" value={this.state.object} onChange={this.handleChange}></input>
                  </div>
                  </div>
                
                  <div className="form-group-contact">
                  <div className="left-row-contact">
                  <label className="second-title-contact">Message</label>
                  </div>
                  <textarea type="text" className="form-control-text" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                  </div>
		

      
        
          
                  </div>
                
                  <div className="line-contact"></div>
                  <div className="left-row-contact">
                  <button type="submit" className="button-contact" href='#'>Submit</button>
                  </div>
                  </form>
    
   
                  
                  </div>
                
                </div>
            
               
        )}
  
}

 
         
            

