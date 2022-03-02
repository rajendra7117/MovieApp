import React from 'react';
import Movie from './Movie';
import './WatchListGrid.css';

export default function WatchListGrid(props) {
    
    const movies = props.movies.map(movie => <Movie key={movie.id}image={movie.poster_path} title={movie.title} rating={movie.vote_average} id={movie.id}/>)
   
    return (
        <div className='watchListDiv'>
        <div className='watchlistgrid'>
            {movies}
        </div>
        </div>
    )
}
