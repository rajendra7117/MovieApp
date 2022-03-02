import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useInput from "../../hooks/use-input";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginRequest } from "../auth-functions/lib";
import useHttp from "../../hooks/use-http";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from "react-toastify";
import { authSliceActions } from "../../store/AuthSlice";
import { motion } from "framer-motion";
import Loader from "../../Loader/Loader";
import "./Login.css";
export default function SignIn() {
  const [errorState, setErrorState] = useState(false);
  const [loadSpinner, setLoadSpinner] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const dispatch = useDispatch();
  
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
  } = useInput((value) => value.length >= 7);

  const history = useHistory();

  const { sendRequest, authState } = useHttp(loginRequest);
  const submitHandler = (e) => {
    e.preventDefault();

    if (emailHasError) {
      setErrorState(true);
      setErrorMsg("Invalid email");
      return;
    }
    if(passwordHasError){
      setErrorState(true)
      setErrorMsg('Password must be 6 characters long')
      return;
    }
    sendRequest({ email: enteredEmail, password: enteredPassword });
    setErrorState(false);
    setLoadSpinner(true)
  };

  useEffect(() => {
    if (Object.keys(authState).length != 0) {
      
      if (authState.status == "error") {
        console.log(authState.data);
        setErrorMsg(authState.data)
        setErrorState(true);
        setLoadSpinner(false)
      } else {
        
        toast.success("Login In Successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          history.push("/popular");
          setLoadSpinner(false)
          dispatch(authSliceActions.loggedIn());
          setErrorState(false);
        }, 3000);
      }
    }
  }, [authState]);
  return (
    <motion.div
      className="form-div"
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: "-100vh" }}
    >
      <form className="form" onSubmit={submitHandler}>
        <h1>Login to Your Account</h1>
        <input
          type="email"
          placeholder="enter your email"
          onChange={emailHandler}
          onBlur={emailBlurHandler}
        />
        <input
          type="password"
          placeholder="enter your password"
          onChange={passwordHandler}
          onBlur={passwordBlurHandler}
        />
        {errorState && (
          <Alert variant="warning">
            {errorMsg}
          </Alert>
        )}
        <button type="submit">Login In</button>
        <NavLink to="/signin" className="login-link">
          Create New Account
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
