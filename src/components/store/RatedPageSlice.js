import { createSlice } from "@reduxjs/toolkit";


const ratedPageSlice = createSlice({
    name: 'page',
    initialState:{ratedPage: localStorage.getItem('ratedPage') ? JSON.parse(localStorage.getItem('ratedPage')) : 1,

                },
    reducers: {
        changeRatedPage(state, action){

            let currentPage = parseInt(state.ratedPage)
           
            if(action.payload==='next'){
                state.ratedPage=currentPage+1
            }
            else{
                state.ratedPage=currentPage-1
            }
         
            localStorage.setItem('ratedPage', JSON.stringify(state.ratedPage))
        }
    }
})

export const ratedPageAction = ratedPageSlice.actions

export default ratedPageSlice;