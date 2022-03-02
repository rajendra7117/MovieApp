import React from "react";
import { Image, Badge } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { favActions } from "../store/FavSlice";
import Tippy from "@tippyjs/react";
import "./FavMovie.css";
import "tippy.js/dist/tippy.css";
export default function FavMovie(props) {

  const dispatch = useDispatch()
  const removeFromFav =e=>{
      dispatch(favActions.removeFromFav(props.id))
  }
  return (
    <div className="favmovie">
      <div className="favImg">
       
        <Image
          src={`https://image.tmdb.org/t/p/w400/${props.image}`}
          className="wimage"
        />
      </div>
      <div className="fav-details">
        <h5>{props.title}</h5>

        <div className="rating">
          <Badge bg="warning">IMDB:{props.rating}</Badge>
        </div>
        <Tippy content={<span className="tippyClass">Remove from Fav</span>}>

          <div className="fav-icon">
            <FaHeart onClick={removeFromFav}/>
          </div>
        </Tippy>
      </div>
    </div>
  );
}
