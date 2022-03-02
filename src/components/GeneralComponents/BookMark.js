import React, { useState, useEffect } from "react";
import "./BookMark.css";
import Tippy from "@tippyjs/react";
import { watchListAction } from "../store/WatchListSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { FaBookmark } from "react-icons/fa";

import { useDispatch } from "react-redux";
const  BookMark =(props) => {
  const watchList = useSelector((state) => state.watchList);
  const [isMovieOnList, setIsMovieOnList] = useState(false);
 
  useEffect(() => {
    
    const onList = watchList.watchList.find((ele) => {
        if (ele.id === props.movie.id) {
          return true;
        }
      });
      if (onList) {
        setIsMovieOnList(true);
      }
  }, [watchList]);

  const dispatch = useDispatch();

  const addToWatchList = (e) => {
    toast.success("movie added to watch List", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(watchListAction.addToWatchList(props.movie));
    setIsMovieOnList(true)
  };

  const RemoveFromWatchList = (e) => {
    toast.success("movie removed from watch List", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    dispatch(watchListAction.removeFromWatchList(props.movie.id));
    setIsMovieOnList(false)
  };
  return (
    <div>
      <Tippy
        content={
          <span className="tippyClass">
            {isMovieOnList ? "Remove From WatchList" : "Add to watchList"}
          </span>
        }
      >
        <div>
          <FaBookmark
            onClick={!isMovieOnList ? addToWatchList : RemoveFromWatchList}
          />
        </div>
      </Tippy>
    </div>
  );
}
export default React.memo(BookMark);
