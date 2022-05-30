import movieSlice from "./MovieSlice";
import favSlice from "./FavSlice";
import { configureStore } from "@reduxjs/toolkit";
import previousRoute from "./PreviousRouteSlice";
import WatchListSlice from "./WatchListSlice";
import authSlice from "./AuthSlice";
import pageSlice from "./PageSlice";
import ratedPageSlice from "./RatedPageSlice";
const store = configureStore({
  reducer: {
    popular: movieSlice.reducer,

    previousRoute: previousRoute.reducer,

    watchList: WatchListSlice.reducer,

    favList: favSlice.reducer,
    authStatus: authSlice.reducer,
    pageNumber: pageSlice.reducer,
    ratedPageNumber: ratedPageSlice.reducer

  },
});

export default store;
