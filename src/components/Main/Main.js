import React from "react";
import "./Main.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function Main() {
  return (
    <motion.div
      className="main1"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      exit={{x:'-100vw'}}
      transition={{ duration: 0.6 }}
    >
      <div className="main">
        <h1>Welcome to Movies, please login!</h1>
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>
      </div>
    </motion.div>
  );
}
