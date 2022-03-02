import React from "react";
import "./WatchList.css";
import { useSelector } from "react-redux";
import WatchListGrid from "./WatchListGrid";
import { motion } from "framer-motion";
import NoMovies from "../GeneralComponents/NoMovies";
export default function WatchList() {
  const movies1 = useSelector((state) => state.watchList.watchList);

 
  return (
    <motion.div
      className="watchlist"
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.6 }}
    >
      {movies1.length > 0 ? (
        <WatchListGrid movies={movies1} />
      ) : (
        <NoMovies list={"Watch List"} />
      )}
    </motion.div>
  );
}
