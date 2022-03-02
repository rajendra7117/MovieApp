import React, {useEffect, useState} from 'react'
import './MovieSearch.css';
import {FaSearch} from 'react-icons/fa';
import MoviesGrid from '../GeneralComponents/MoviesGrid';
import { motion } from 'framer-motion';
const MovieSearch = () =>{
   
    const [movie, setMovie] = useState('')
    const [movies, setMovies] = useState([])
    useEffect(() => {
        if(movie.trim()!=''){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US&query=${movie}&include_adult=false`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMovies(data.results)
            })
        }
    }, [movie])

    const inputHandler = e => {
        setMovie(e.target.value)
    }
    return (
        <motion.div className='moviesearch'
        initial={{y:'-200vh'}}
        animate={{y:0}}
        transition={{duration:1}}
        >
           <div className='search-icon'><FaSearch/> </div> 
           <input type='text' placeholder='search for a movie' onChange={inputHandler}></input>
          {movies.length!==0 && <MoviesGrid movies={movies} /> }
        </motion.div>
    )
}

export default React.memo(MovieSearch);