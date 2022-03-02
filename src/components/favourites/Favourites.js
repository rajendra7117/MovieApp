import React from "react";
import { useSelector } from "react-redux";
import FavGrid from "./FavGrid";
import "./Favourites.css";
import { motion } from "framer-motion";
import NoMovies from "../GeneralComponents/NoMovies";
export default function Favourites() {
  const favMovies1 = useSelector((state) => state.favList.favMovies);


 
  return (
    <motion.div
      className="fav"
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      exit={{y:'-100vh'}}
    >
      {favMovies1.length ? <FavGrid movies={favMovies1} /> : <NoMovies list={"favourites"}/>}
    </motion.div>
  );
}
