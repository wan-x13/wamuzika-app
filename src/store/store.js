import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer, { getAllTracks, getIdentity, getRecentlyPlayed }  from "../features/userSlice"
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import trackReducer from "../features/trackSlice"
import navigateReducer from "../features/navigateSlice"
import playReducer  from "../features/play"; 
import playlistReducer from "../features/playlistSlice"
import searchReducer  from "../features/searchSlice"



const rootReducer = combineReducers({
    user : authReducer,
    track : trackReducer,
    navigate : navigateReducer,
    play : playReducer,
    playlist : playlistReducer,
    search : searchReducer,


})
export const  persistConfig = {
    key : "root",
    storage
}

const persistedReducer = persistReducer(persistConfig , rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware : (getDefaultMiddleware)=>
      getDefaultMiddleware({
        thunk : {
          extraArgument : getIdentity, 
        },
        serializableCheck : false
      })
         
})


export const persistor = persistStore(store)

