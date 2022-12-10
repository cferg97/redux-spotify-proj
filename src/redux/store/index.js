import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "../reducers/getData";
import likedSongsReducer from "../reducers/likedSongsReducer";
import userReducer from "../reducers/userReducer";
import playSongReducer from "../reducers/playSong";
import searchReducer from "../reducers/searchReducer";

const mainReducer = combineReducers({
  user: userReducer,
  likedSongs: likedSongsReducer,
  data: dataReducer,
  playSongs: playSongReducer,
  search: searchReducer
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
