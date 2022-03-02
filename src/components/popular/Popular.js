import React, { useEffect, useState } from "react";
import MoviesGrid from "../GeneralComponents/MoviesGrid";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Popular.css";
export default function Popular() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  // const apiKey = "5b43d1ebe66750ccefbad667bde21805";
  const baseapi =
    "https://api.themoviedb.org/3/movie/popular?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US";

  useEffect(() => {
    fetch(`${baseapi}&page=${page}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  }, [page]);
  const nextPageHandler = (e) => {
    setPage((page) => {
      return (page += 1);
    });
  };
  const prevPageHandler = (e) => {
    setPage((page) => {
      return (page -= 1);
    });
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
        {page !== 1 && (
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
