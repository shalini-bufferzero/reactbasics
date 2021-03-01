import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';

class counter extends Component {
  render() { 

     return (

    <div className= "row">
      <div className = "col-1">
     <span className= {this.getBadgeClass()}>{this.formatCount()}</span>
      </div>

      <div className = "col-1">
         <button 
           onClick={()=> this.props.onIncrement(this.props.counter)} type = "button" className= "btn btn-success btn-sm m-2"> 
           <i className  = "fa fa-plus"></i> </button>
           </div>
 
           <div className = "col-1">
           <button  className= "btn btn-secondary btn-sm m-2" 
           onClick={()=> this.props.onDecrement(this.props.counter)} 
           disabled={this.props.counter.value > 0 ? false : true} >
           <i className ="fa fa-minus-square" aria-hidden= "true"></i> </button>
            </div>

            <div className = "col-1">
           <button
            onClick={()=> this.props.onDelete(this.props.counter.id)} type = "button" className= "btn btn-danger btn-sm m-2" >
           <i className ="fa fa-trash-o"></i> </button>
            
            </div>

           </div>   
           
         );
  }

  getBadgeClass(){
      let classes = "badge m-2 badge-";
      classes += this.props.counter.value ===0 ? "primary":"warning";
      return classes;
      
   }

    formatCount(){
      const {value} = this.props.counter;
     return value === 0 ? "Zero" : value;
 }

}
export default counter ;