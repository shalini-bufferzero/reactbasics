import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Rows  extends Component {
    state = { 

        data:[
            {firstName:"abc", lastName: "xyz", email:"xyz@gmail.com"},
            {firstName:"efg", lastName: "abc", email:"xyz@gmail.com"},
            {firstName:"mno", lastName: "efg", email:"xyz@gmail.com"},
            {firstName:"pqr", lastName: "mno", email:"xyz@gmail.com"},
            {firstName:"xyz", lastName: "pqr", email:"xyz@gmail.com"}
        ]
     }

     handleDelete=(row)=>{
      const table = this.state.rowfilter(m=>m._id!== row._id);
      this.setState({Rows})
     }

     render() { 

     return ( 
      <div>
        <table className = "table">
           <thead>
               <th>firstName</th>
               <th>lastName</th>
               <th>email</th>
              
            </thead>

          <tbody>

              {this.state.Rows.map((row)=> {
            return(
              <td>
                <button className="btn btn-danger btn sm-m2" onClick={()=>this.handleDelete(row)}>Delete</button>
                </td>
              )

            })}   

      </tbody>

       </table>

      </div>
   );
}
}

export default Rows;