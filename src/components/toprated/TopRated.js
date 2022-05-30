import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import MoviesGrid from "../GeneralComponents/MoviesGrid";
import { motion } from "framer-motion";
import { ratedPageAction } from "../store/RatedPageSlice";
import { useSelector, useDispatch } from "react-redux";
export default function TopRated() {
  const [moviesData, setMoviesData] = useState([]);
  const pageNumber = useSelector((state) => state.ratedPageNumber.ratedPage);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US&page=${pageNumber}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMoviesData(data.results);
      });
  }, [pageNumber]);
  const prevHandler = (e) => {
    dispatch(ratedPageAction.changeRatedPage("prev"));
  };

  const nextHandler = (e) => {
    dispatch(ratedPageAction.changeRatedPage("next"));
  };
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.6 }}
    >
      <MoviesGrid movies={moviesData} />
      <div className="buttons">
        {pageNumber !== 1 && <Button onClick={prevHandler}>Prev</Button>}
        <Button onClick={nextHandler}>Next</Button>
      </div>
    </motion.div>
  );
}
