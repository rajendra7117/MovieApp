import React, { useEffect, useState } from "react";
import MoviesGrid from "../GeneralComponents/MoviesGrid";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Popular.css";
import { pageSliceActions } from "../store/PageSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Popular() {
  const [movies, setMovies] = useState([]);

  const pageNumber = useSelector((state) => state.pageNumber.popularPage);
  const dispatch = useDispatch();
  
  // const apiKey = "5b43d1ebe66750ccefbad667bde21805";
  const baseapi =
    "https://api.themoviedb.org/3/movie/popular?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US";

  useEffect(() => {
    fetch(`${baseapi}&page=${pageNumber}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  }, [pageNumber]);
  const nextPageHandler = (e) => {
    dispatch(pageSliceActions.changePopularPage("next"));
  };
  const prevPageHandler = (e) => {
    dispatch(pageSliceActions.changePopularPage("prev"));
  };

  return (
    <motion.div
      className="popular"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      transition={{ duration: 0.6 }}
    >
      <MoviesGrid movies={movies} />
      <div className="buttons">
        {pageNumber !== 1 && (
          <Button variant="primary" onClick={prevPageHandler}>
            Prev
          </Button>
        )}
        <Button variant="primary" onClick={nextPageHandler}>
          Next
        </Button>
      </div>
    </motion.div>
  );
}
