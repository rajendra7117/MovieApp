import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const BackDrop = (props) => {
  return <div className="backDrop"></div>;
};

const Overlay = (props) => {
  return <div className="modaloverlay">
      {props.children}
      </div>;
};

const Modal = (props) => {
    
  const modalDiv = document.querySelector("#modal");
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, modalDiv)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, modalDiv)}
    </Fragment>
  );
};

export default Modal;
