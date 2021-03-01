import React, { Component } from 'react';
import Like from './sample/like';
import Table from './table';

 
class  MovieTable extends Component {
    columns = [
        {path: 'title', label : 'Title'},
        {path: 'genre.name', label : 'Genre'},
        {path: 'numberInStock', label : 'Stock'},
        {path: 'dailyRentalRate', label : 'Rate'},
        {key : 'like',
         content: movie=> <Like liked= {movie.liked} onClick={() => this.props.onLike(movie)} /> 
        },
        {key : 'delete', content: movie=> <button onClick={()=> this.props.onDelete(movie)}  className="btn btn-danger btn sm-m2" > 
         Delete </button>}
    ]

    
render(){
const {movies, onSort, sortColumn} = this.props;

    return (
          
      <Table columns ={this.columnhs} 
      data={movies}
      sortColumn = {sortColumn} 
      onSort = {onSort}
    />
    
      );
    }
}
export default MovieTable;