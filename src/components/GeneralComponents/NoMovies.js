import React from 'react'
import './NoMovies.css'
import playlist from '../../Images/playlist.png'
export default function NoMovies(props) {
  return (
    <div className='no-movies'>
        <div>
            <h1>No Movies on Your {props.list}</h1>
            <img src={playlist} alt="nomovies"/>
            </div>
    </div>
  )
}
