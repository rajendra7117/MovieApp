import React from "react";
import MovieItem from "../GeneralComponents/MovieItem";
import "./MoviesGrid.css";
export default function MoviesGrid(props) {
  const grid = props.movies.map((movie) => (
    <MovieItem
      title={movie.title}
      img={movie.poster_path}
      movie={movie}
      key={movie.id}
      exit={{y:'-100vh'}}
      transition={{ duration: 1, delay: 0.5 }}
    />
  ));

  return <div className="grid">{grid}</div>;
}
