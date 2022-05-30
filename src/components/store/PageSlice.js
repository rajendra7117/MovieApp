import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: 'page',
    initialState:{popularPage: localStorage.getItem('popularPage') ? JSON.parse(localStorage.getItem('popularPage')) : 1,

                },
    reducers: {
        changePopularPage(state, action){

            let currentPage = parseInt(state.popularPage)
           
            if(action.payload==='next'){
                state.popularPage=currentPage+1
            }
            else{
                state.popularPage=currentPage-1
            }
         
            localStorage.setItem('popularPage', JSON.stringify(state.popularPage))
        }
    }
})

export const pageSliceActions = pageSlice.actions

export default pageSlice;