import movieSlice from "./MovieSlice";
import favSlice from "./FavSlice";
import { configureStore } from "@reduxjs/toolkit";
import previousRoute from "./PreviousRouteSlice";
import WatchListSlice from "./WatchListSlice";
import authSlice from "./AuthSlice";
const store = configureStore({
  reducer: {
    popular: movieSlice.reducer,

    previousRoute: previousRoute.reducer,

    watchList: WatchListSlice.reducer,

    favList: favSlice.reducer,
    authStatus: authSlice.reducer
  },
});

export default store;
