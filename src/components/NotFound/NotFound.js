import React from 'react'
import './NotFound.css'
import notfoundImg from '../../Images/notfound.png'
export default function NotFound() {
  return (
    <div className='notfound-div'>
        <div>
            <h1>Page Not Found</h1>
            <img src={notfoundImg}></img>
        </div>
    </div>
  )
}
