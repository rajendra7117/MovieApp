import React, { useEffect, useState } from "react";
import "./Header.css";
import { favActions } from "../store/FavSlice";
import { watchListAction } from "../store/WatchListSlice";

import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSliceActions } from "../store/AuthSlice";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const history = useHistory();
  const status = useSelector((state) => state.authStatus.isLogged);
  const [loginStatus, setLoginStatus] = useState();
  useEffect(() => {
    setLoginStatus(JSON.parse(localStorage.getItem("loginStatus")));
  }, [status]);
  const dispatch = useDispatch();
  const logoutHanlder = (e) => {
    dispatch(authSliceActions.loggedOut());
    dispatch(watchListAction.removeUserData());
    dispatch(favActions.removeUserData());

    setLoginStatus(false);
    history.push("/");
  };
  const [navClass, setNavClass] = useState(false);
  const navBartoggler = (e) => {
    setNavClass((prev) => !prev);
  };
  

  return (
    <div className="main-header">
      <h2 className="navbrand">MoviesAPP</h2>
      {!loginStatus && (
        <div className="authButtons">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="signin">Sign up</NavLink>
        </div>
      )}

      {loginStatus && (
        <div
          className={`menu ${navClass ? "cross" : ""}`}
          onClick={navBartoggler}
        >
          <span className="span-1"></span>
          <span className="span-2"></span>
          <span className="span-3"></span>
        </div>
      )}
      {loginStatus && (
        <div className={`nav-bar ${navClass ? "active" : ""}`}>
          <div>
            <NavLink to="/popular" onClick={navBartoggler} >Popular</NavLink>
          </div>

          <div>
           
            <NavLink to="/rated" onClick={navBartoggler}>Rated</NavLink>
          </div>
          <div>
            <NavLink to="/moviesearch" onClick={navBartoggler} className="nav-icon">
              <FaSearch />
            </NavLink>
          </div>

          <div>
           
            <NavLink to="/watchlist" className="watch-list" onClick={navBartoggler}>
              WatchList
            </NavLink>
          </div>

          <div>
           
            <NavLink to="/fav" onClick={navBartoggler}>Favourites</NavLink>
          </div>
          <div className="status">
            {loginStatus && (
              <button className="logoutBtn" onClick={logoutHanlder}>
                Logout
              </button>
            )}

            {!loginStatus && (
              <NavLink to="signin" className="signin">
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
