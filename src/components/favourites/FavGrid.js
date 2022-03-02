import React from "react";
import FavMovie from "./FavMovie";
import "./FavGrid.css";
export default function FavGrid(props) {
  const favMovies = props.movies.map((movie) => (
    <FavMovie
      key={movie.id}
      image={movie.poster_path}
      title={movie.title}
      rating={movie.vote_average}
      id={movie.id}
    />
  ));
  return <div className="favGrid">{favMovies}</div>;
}
