import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchTerm : "",
    items : [],
    isEmpty : "",
    isLoading : true
  
}


const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers : {
        getSearchTerm : (state, action)=>{
            state.searchTerm = action.payload
        },
        setTracks : (state, action)=>{
            state.items = action.payload
        },
        getIsEmpty : (state, action)=>{
            state.isEmpty = action.payload
        }
       
    }
})

export const {getSearchTerm ,setTracks , getIsEmpty} = searchSlice.actions

export default searchSlice.reducer