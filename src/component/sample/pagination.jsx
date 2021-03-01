import React, { Component } from 'react';
import _ from "lodash";
import PropTypes from "prop-types"

const Pagination= (props)=>{

    const {itemsCount, pageSize, onPageChange, currentPage} = props;
    console.log(currentPage); 

    const pagesCount = Math.ceil(itemsCount / pageSize);
    
    if(pagesCount === 1) return null

    const pages = _.range(1, pagesCount + 1)  //if pagecount is 4 it will be return an array b/w 1 to 3 and included in array

    console.log(pages)


        return ( 
            <nav aria-label="Page navigation example">

             <ul className="pagination">

                 {pages.map((page)=>{  //we are mapping the pages of the array
                   
                   return(<li key= {page} className= {page === currentPage? "page-item active" : "page-item"}>
                      
                    <a  className="page-link" onClick={() => onPageChange(page)}> </a>
                    </li>)
                 })}
              </ul>
                </nav>
         );
}
 
Pagination.propTypes = {

   itemsCount : PropTypes.number.isRequired,
   pageSize : PropTypes.number.isRequired,
   currentPage : PropTypes.number.isRequired,
   onPageChange : PropTypes.func.isRequired
}
export default Pagination; 