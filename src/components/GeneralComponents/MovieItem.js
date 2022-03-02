import React from "react";
import { Card } from "react-bootstrap";
import "./MovieItem.css";
import { useDispatch } from "react-redux";
import { movieAction } from "../store/MovieSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { previousRouteActions } from "../store/PreviousRouteSlice";
export default function MovieItem(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const showMovieInfo = (e) => {
    dispatch(movieAction.addMovie(props.movie));
    dispatch(previousRouteActions.setPreviousRoute(history.location.pathname));

    history.push(`/info/${props.movie.title}`);
  };

  return (
    <Card onClick={showMovieInfo} className="movie">
      <Card.Img
        src={`https://image.tmdb.org/t/p/w400/${props.img}`}
        style={{ height: "350px", width: "300px" }}
      />
    </Card>
  );
}
