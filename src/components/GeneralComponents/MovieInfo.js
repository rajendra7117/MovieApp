import React, { useEffect, useState } from "react";
import { Container, Image, Button, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { favActions } from "../store/FavSlice";
import BookMark from "./BookMark";
import "./MovieInfo.css";

import "tippy.js/dist/tippy.css";
import { motion } from "framer-motion";

import FavBookMark from "../favourites/FavBookMark";
export default function MovieInfo() {
  const movie = JSON.parse(localStorage.getItem("movie"));

  const previousRoute = useSelector(
    (state) => state.previousRoute.previousRoute
  );
  // const apiKey = "5b43d1ebe66750ccefbad667bde21805";
  const baseapi = "https://api.themoviedb.org/3/movie/";
  const [movieData, setMovieData] = useState();
  const history = useHistory();

  

  const backButtonHandler = (e) => {
    history.push(previousRoute);
  };

  useEffect(() => {
    fetch(
      `${baseapi}/${movie.id}?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovieData(data);
      });
  }, [movie.id]);

  let date = "";
  let genre = "";
  let rating = "";
  let tagline = "";
  let story = "";

  if (movieData) {
    date = movieData.release_date;
    date = date.slice(0, 4);
    genre += ` ${movieData.genres.map((ele) => ele.name)} `;
    let released = movieData.status === "Released";
    let rate = movieData.vote_average;

    rating = released ? rate : "Not Released";
    tagline = movieData.tagline;
    story = movieData.overview;
  }

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.6 }}
    >
      <Container className="info-container">
        <div className="infoRow">
          <div className="imgDiv">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              className="movieImg"
            />
          </div>
        </div>
        <div className="details">
          {movie.title} ({date})
        </div>
        <div className="bookmarking">
          <BookMark movie={movie} />
          <FavBookMark movie={movie} />
        </div>
        <div className="factors">
          <div>Genre: {genre}</div>
          <h4>
            <Badge bg="warning">IMDB:{rating}</Badge>
          </h4>
        </div>

        <div className="plot">
          <p>{story}</p>
        </div>
        <div className="infobuttons">
          <Button className="infoButton" onClick={backButtonHandler}>
            back
          </Button>
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
        </div>
      </Container>
    </motion.div>
  );
}
