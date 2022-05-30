import { createSlice } from "@reduxjs/toolkit";

const WatchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchList: localStorage.getItem("watchList")
      ? JSON.parse(localStorage.getItem("watchList"))
      : [],
  },
  reducers: {
    addToWatchList(state, action) {
      if (localStorage.getItem("watchList")) {
        state.watchList = JSON.parse(localStorage.getItem("watchList"));
      }
      const id = action.payload.id;
      let movieExists = state.watchList.find((movie) => movie.id === id);
      if (!movieExists) {
        state.watchList = [...state.watchList, action.payload];
      }
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    },
    removeFromWatchList(state, action) {
      

      const id = action.payload;
      state.watchList = state.watchList.filter((movie) => movie.id !== id);
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    },

    removeUserData(state, action){
      state.watchList=[]
      localStorage.setItem('watchList', JSON.stringify(state.watchList))
  }
  },
});

export const watchListAction = WatchListSlice.actions;

export default WatchListSlice;
