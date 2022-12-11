import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "../reducers/getData";
import likedSongsReducer from "../reducers/likedSongsReducer";
import playSongReducer from "../reducers/playSong";
import searchReducer from "../reducers/searchReducer";
import playListReducer from "../reducers/playListReducer";

const mainReducer = combineReducers({
  likedSongs: likedSongsReducer,
  data: dataReducer,
  playSongs: playSongReducer,
  search: searchReducer,
  playlists: playListReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
