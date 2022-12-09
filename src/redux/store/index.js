import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "../reducers/getData";
import likedSongsReducer from "../reducers/likedSongsReducer";
import userReducer from "../reducers/userReducer";
import playSongReducer from "../reducers/playSong";

const mainReducer = combineReducers({
  user: userReducer,
  likedSongs: likedSongsReducer,
  data: dataReducer,
  playSongs: playSongReducer
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
