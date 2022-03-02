import React from "react";
import { Image, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { watchListAction } from "../store/WatchListSlice";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "./Movie.css";
export default function Movie(props) {
  const dispatch = useDispatch();
  const removeMovie = (e) => {
    dispatch(watchListAction.removeFromWatchList(props.id));
    toast.info("Movie removed from watch List", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <motion.div
      className="wmovie"
      whileHover={{ backGroundColor: "#04293A", color: "#fff" }}
      transition={{ duration: ".3", delay: ".1" }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w400/${props.image}`}
        className="wimage"
        roundedCircle
      />
      <div className="title">
        <h6>{props.title}</h6>
      </div>

      <div>
        <h4>
          <Badge>IMBD: {props.rating}</Badge>
        </h4>
      </div>

      <div>
        <Button variant="danger" onClick={removeMovie}>
          Remove
        </Button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </motion.div>
  );
}
