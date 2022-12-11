export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const LIKE_SONG = "LIKE_SONG";
export const REMOVE_LIKE_SONG = "REMOVE_LIKE_SONG";
export const GET_TRACK_DATA = "GET_TRACK_DATA";
export const GET_ALBUM_DATA = "GET_ALBUM_DATA";
export const GET_PILL_DATA = "GET_PILL_DATA";
export const PLAY_SONG_ARTIST = "PLAY_SONG_ARTIST";
export const PLAY_SONG_TRACK = "PLAY_SONG_TRACK";
export const PLAY_SONG_ART = "PLAY_SONG_ART";
export const PLAY_SONG_DURATION = "PLAY_SONG_DURATION"
export const PLAY_SONG_MUSIC = "PLAY_SONG_MUSIC"
export const SET_QUERY = "SET_QUERY"
export const SEARCH_FOR_MUSIC = "SEARCH_FOR_MUSIC"



export const setMusicPlay = (i) => {
  return{
    type: PLAY_SONG_MUSIC,
    payload: i
  }
}

export const setMusicDurationAction = (i) => {
  return{
    type: PLAY_SONG_DURATION,
    payload: i
  }
}

export const setSearchQueryAction = (i) => {
  return{
    type: SET_QUERY,
    payload: i
  }
}

export const playSongArtistAction = (i) => {
  return {
    type: PLAY_SONG_ARTIST,
    payload: i,
  };
};

export const playSongTrackAction = (i) => {
  return {
    type: PLAY_SONG_TRACK,
    payload: i,
  };
};
 
export const playSongArtAction = (i) => {
  return {
    type: PLAY_SONG_ART,
    payload: i,
  };
};

export const createPlaylistAction = (i) => {
  return {
    type: CREATE_PLAYLIST,
    payload: i,
  };
};

export const likeSongAction = (i) => {
  return {
    type: LIKE_SONG,
    payload: i,
  };
};

export const getTrackDataAction = (endpoint) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(endpoint);
      let fetchedData = await response.json();
      if (response.ok) {
        dispatch({
          type: GET_TRACK_DATA,
          payload: fetchedData.data,
        });
      } else {
        console.log("error fetching");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAlbumDataAction = (endpoint) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(endpoint);
      let fetchedData = await response.json();
      if (response.ok) {
        dispatch({
          type: GET_ALBUM_DATA,
          payload: fetchedData.data,
        });
      } else {
        console.log("error fetching");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getPillDataAction = (endpoint) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(endpoint);
      let fetchedData = await response.json();
      if (response.ok) {
        dispatch({
          type: GET_PILL_DATA,
          payload: fetchedData.data,
        });
      } else {
        console.log("error fetching");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
