import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'fav',
    initialState: {favMovies: localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')) : []}
    ,
    reducers:{
        addToFav(state,action){
            
            const id = action.payload.id;
            
            let movieExists = state.favMovies.find((movie) => movie.id == id)
            if(!movieExists){
            state.favMovies=[...state.favMovies,action.payload]
            }
            localStorage.setItem('fav', JSON.stringify(state.favMovies))

        },
        removeFromFav(state, action){
           
            const id = action.payload
            state.favMovies = state.favMovies.filter(movie => movie.id!==id)
            localStorage.setItem('fav', JSON.stringify(state.favMovies))

        },
        removeUserData(state, action){
            state.favMovies=[]
            localStorage.setItem('fav', JSON.stringify(state.favMovies))
        }

    }
})

export const favActions = favSlice.actions

export default favSlice;