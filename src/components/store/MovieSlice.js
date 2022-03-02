import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'popular',
    initialState: {movie:[]},
    reducers: {
        addMovie(state,action){
            state.movie=action.payload
            
            localStorage.setItem('movie', JSON.stringify(state.movie))
           
        }
    }
})

export default movieSlice;
export const movieAction = movieSlice.actions;