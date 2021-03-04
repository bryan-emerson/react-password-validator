import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {

  constructor() {
    super()
    this.handlePassword = this.handlePassword.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleMatch = this.handleMatch.bind(this)
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      valid: ""
    };
  }

  handlePassword = (e)=> {
    this.setState({
      password: e.target.value
    })
  }

  handleConfirm = (e)=> {
    this.setState({
      passwordConfirm: e.target.value
    })
  }

  handleMatch = ()=> {
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({valid: 'Passwords Match BRO!'})
    } else if (this.state.password !== this.state.passwordConfirm) {
      this.setState({valid: 'Passwords do not match bro'})
    }

  }

  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" onChange = {this.handlePassword} placeholder="password" />
        <input type="password" onChange = {this.handleConfirm} placeholder="confirm password" />
        <button onClick={this.handleMatch} >Submit</button>
        <div>{this.state.valid}</div>
      </div>
    );
  }
}

export default Validator;
