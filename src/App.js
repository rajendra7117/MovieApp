import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import { Route, Switch, useLocation } from "react-router-dom";
import Popular from "./components/popular/Popular";
import MovieInfo from "./components/GeneralComponents/MovieInfo";
import TopRated from "./components/toprated/TopRated";
import MovieSearch from "./components/search/MovieSearch";
import Latest from "./components/Latest/Latest";
import WatchList from "./components/watchList/WatchList";
import Favourites from "./components/favourites/Favourites";
import SignIn from "./components/auth/sign/SignIn";
import Login from "./components/auth/login/Login";
import Main from "./components/Main/Main";
import { AnimatePresence } from "framer-motion";
import NotFound from "./components/NotFound/NotFound";
import { useSelector, useDispatch } from "react-redux";
import { authSliceActions } from "./components/store/AuthSlice";
import SignInSuccess from "./components/auth/sign/SignInSuccess";


function App() {
  const location = useLocation();
  const dispatch = useDispatch()
  const authStatus = useSelector((state) => state.authStatus.isLogged);
 

  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Main />
          </Route>

          <Route path="/latest" exact>
            {authStatus ? <Latest /> : <Main />}
          </Route>

          <Route path="/popular" exact>
            {authStatus ? <Popular /> : <Main />}
          </Route>
          <Route path="/info/:id">
            {authStatus ? <MovieInfo /> : <Main />}
          </Route>
          <Route path="/rated" exact>
            {authStatus ? <TopRated /> : <Main />}
          </Route>
          <Route path="/movieSearch">
            {authStatus ? <MovieSearch /> : <Main />}
          </Route>
          <Route path="/watchlist" exact>
            {authStatus ? <WatchList /> : <Main />}
          </Route>
          <Route path="/fav">{authStatus ? <Favourites /> : <Main />}</Route>
          <Route path="/signin">{!authStatus ? <SignIn /> : <Latest />}</Route>
          <Route path="/signinsuccess">
            {!authStatus && <SignInSuccess />}
          </Route>
          <Route path="/login">{!authStatus ? <Login /> : <Latest />}</Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
