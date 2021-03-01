import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


//Setting Attributes

//Adding Style Attributes

//Rendering  Classes Dynamically

//Conditionally Rendering

//Binding Event Handlers and Handling Events


class  Example extends Component {
   

    // constructor(){ ------> Not required 
    //     super();

    //     this.bindHandler = this.bindHandler.bind(this)
    // }

    // state = {  
    //    count : 0,
    //    tags : ["tag1", "tag2", "tag3", "tag4"]
    // //    imageUrl : "https://picsum.photos/200"
    // }

    //
    state={
        count: this.props.value
    };

    // style ={
    //     fontSize:50,
    //     fontWeight : "bold",
    //     color : "orange"
    // }

    //  bindHandler =(e)=>{

    //     // console.log(e)(For passing an argument we are deleting this line)

    //   this.setState({
    //      count: this.state.count+1
    //    })
    //  }

    // _submit =() =>{
    //     this.setState({
    //     count : this.state.count+1
    //  })

    // listHandler=(e)=>{
 
    //     console.log(e)

    // }

    bindHandler=()=>{
        this.setState({
            count:this.state.count+1,
        });
    };
  

    listHandler=(obj)=>{
 
       console.log(obj.id)
    }

//renderlist
//   renderTags(){
//       if(this.state.tags.length=== 0) return "There is no tags !"

//       return (
//         <ul>
//         {this.state.tags.map((tag, index)=>{
//             // return <li key={index} onClick={this.listHandler}>{tag}</li>

//             return <li key={index} onClick={()=>this.listHandler({id:index})}>{tag}</li>
//         })}
        
//        </ul>

//       )
//   }


     /*_submit=()=>{
        this.setState({
            count :this.state.count+1
        })
        console.log("called")
    }*/

    render() { 

        
        return (
            <div className = "container">

                <span className = {this. getBadgeClass()}> {this.formatCount()}
                </span>
                {/* <img src = {this.state.imageUrl}/>

                <span style = {this.style}>Example</span> */}

                {/* <h1>
                    {this.formatCount()}
                </h1> */}
               
                <button 
                className = "btn btn-secondary btn-sm my-3" 
                  onClick={this.bindHandler}> Increment </button>
                {/* {this.renderTags()} */}
                
            </div>                                     
   
            );
    }

    getBadgeClass(){
        let classes = "badge m-1 badge-";
        classes += this.state.count === 0 ? "primary" : "warning";
        return classes;
    }

    formatCount(){
        return this.state.count === 0 ? "Zero" : this.state.count;
    }


}
 
export default Example;

