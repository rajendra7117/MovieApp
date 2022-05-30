import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom";
import { Alert } from "react-bootstrap";
import useHttp from "../../hooks/use-http";
import { signInRequest } from "../auth-functions/lib";
import { ToastContainer, toast } from "react-toastify";

import { motion } from "framer-motion";

import "./SignIn.css";
import useInput from "../../hooks/use-input";
import Loader from "../../Loader/Loader";
export default function SignIn() {
  const history = useHistory();
  const [errorState, setErrorState] = useState(false);
  const [loadSpinner, setLoadSpinner] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
 
  const {
    value: enteredEmail,
    hasError: emailHasError,
    onChangeValue: emailHandler,
    onBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPassword,
    hasError: passwordHasError,
    onChangeValue: passwordHandler,
    onBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length>=7);
const {sendRequest, authState} = useHttp(signInRequest)


  const signInHandler = (e) => {
    e.preventDefault();
    if (emailHasError) {
      setErrorState(true);
      setErrorMsg('Invalid Email')
      return;
    }
    if(passwordHasError){
      setErrorState(true)
      setErrorMsg('Password should be at least 6 characters')
      return
    }
    setErrorState(false)
    sendRequest({email: enteredEmail, password: enteredPassword})
    setLoadSpinner(true)

  };
  useEffect(()=>{

    if(Object.keys(authState).length!=0){
     
    if(authState.status=='error'){
      setErrorMsg(authState.data)
      
      setErrorState(true)
      setLoadSpinner(false)
      
    }
    else{
      toast.success('Sign In Successful', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      setTimeout(() => {
        history.push('/signinsuccess')
        setLoadSpinner(false)
        setErrorState(false)
      }, 3000)
      
    }
  }

  },[authState])
  
 



  return (
    <motion.div className="signIN-div"
    
    initial={{y:-300}}
        animate={{y:0}}
        transition={{duration:1}}
        exit={{y:'-100vh'}}
    >
      <form className="signIn-form" onSubmit={signInHandler}>
        <h1>Sign IN</h1>
        <input
          type="email"
          placeholder="enter your email"
          onChange={emailHandler}
          onBlur={emailBlurHandler}
        />
        <input
          type="password"
          placeholder="enter a password"
          onChange={passwordHandler}
          onBlur={passwordBlurHandler}
        />
        {errorState &&
          <div className="errorClass">
            <Alert variant="danger">{errorMsg}</Alert>
          </div>
        }
        <button type="submit">Sign In</button>
        <NavLink to="/login" className="login-link">
          Already have an account
        </NavLink>
      </form>
      {loadSpinner && <Loader />}
      <ToastContainer
          position="top-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </motion.div>
  );
}
