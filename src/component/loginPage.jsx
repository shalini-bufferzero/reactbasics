import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
 import "./app.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.setState = {
      username: "",
      Id: "",
      password: "",
            
    };
  }

  render() {

    return (

<div className = "container">
<div className="App" title="Login">
    <h1> Welcome to BufferZero</h1>
  <form>
<p>Enter your username:</p>
          <input type="text" name="username" onChange={this.myChangeHandler} />

         <p>Enter your ID:</p>
         <input type="text" name="ID" onChange={this.myChangeHandler} />

        <p>Enter your password:</p>
         <input type="text" name="password" onChange={this.myChangeHandler} />

       <br/>
            <br/>
            
          <button type="text" > Login </button>
          
          </form>
      </div>
      </div>

      );
    }
}

export default LoginPage;
