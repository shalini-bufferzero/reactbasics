import React, { Component } from 'react';

class NavBar extends Component {
   
    render() { 

        return ( 
            <nav className="navbar  navbar-expand-xlg navbar-light bg-light my-lg-1">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">
               NavBar
              <span className="badge rounded-pill bg-warning text-dark mx-2">
             {this.props.totalCounter}
           </span>
             </a>
              </div>
           </nav>
  

   
         );
    }
}
 
export default NavBar;