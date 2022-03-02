import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLogged: localStorage.getItem('loginStatus') ? JSON.parse(localStorage.getItem('loginStatus') ): false},
    reducers:{
        loggedIn(state, action){
            console.log('exc')
            if(localStorage.getItem('loginStatus')){
                state.isLogged=JSON.parse(localStorage.getItem('loginStatus'))
            }
            state.isLogged=true
            localStorage.setItem('loginStatus', true)
        },
        loggedOut(state, action){
            state.isLogged=false
            localStorage.setItem('loginStatus', false)
        }
    }

})

export const authSliceActions = authSlice.actions

export default authSlice;