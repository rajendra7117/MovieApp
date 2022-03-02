import { createSlice } from "@reduxjs/toolkit";

const previousRoute = createSlice({
    name: 'previousRoute',
    initialState: {previousRoute:''},
    reducers:{
        setPreviousRoute(state,action){
            state.previousRoute= action.payload
        }
    }
})
export const previousRouteActions = previousRoute.actions;
export default previousRoute;