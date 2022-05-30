import React from 'react';
import { NavLink } from 'react-router-dom';
import SuccessImg from '../../../Images/tick.png'
import { motion } from 'framer-motion';
import './SignInSuccess.css'
import { type } from '@testing-library/user-event/dist/type';

export default function SignInSuccess() {
  return (
    <motion.div className='signin-success'
    initial={{x:"-200vw"}}
    animate={{x:0}}
    transition={{duration: "0.5", type: 'spring'}}
   
    >
        <div className='main-div'>
        <div className='div1'>
            <img src={SuccessImg} />
            <h4>Sign In Successful</h4>
        </div>
        <div className='div2'>
            <h4>Please login to Explore</h4>
            <NavLink to="login">Login To Your Account</NavLink>
        </div>
        </div>
    </motion.div>
  )
}
