import React from 'react'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import MoviesGrid from '../GeneralComponents/MoviesGrid'
import { motion } from 'framer-motion'
export default function TopRated() {

    const [page,setPage] = useState(1)
    const [moviesData, setMoviesData] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US&page=${page}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setMoviesData(data.results)
        })
    },[page])
    const prevHandler = e => {
        setPage(page => {
            return page-=1
        })
    }

    const nextHandler = e => {
        setPage(page => {
            return page+=1
        })
    }
    return (
        <motion.div
        initial={{x:-300}}
        animate={{x:0}}
        transition={{duration:1}}
        exit={{x:'-100vw'}}
        transition={{ duration: 0.6 }}
        >
            <MoviesGrid movies={moviesData}/>
            <div className='buttons'>
              {page!==1 &&  <Button onClick={prevHandler}>Prev</Button>}
                <Button onClick={nextHandler}>Next</Button>
            </div>
        </motion.div>
    )
}
