export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const LIKE_SONG = "LIKE_SONG";
export const REMOVE_LIKE_SONG = "REMOVE_LIKE_SONG";
export const GET_TRACK_DATA = "GET_TRACK_DATA";
export const GET_ALBUM_DATA = "GET_ALBUM_DATA";
export const GET_PILL_DATA = "GET_PILL_DATA";
export const PLAY_SONG_ARTIST = "PLAY_SONG_ARTIST";
export const PLAY_SONG_TRACK = "PLAY_SONG_TRACK"

export const playSongArtistAction = (i) => {
  return {
    type: PLAY_SONG_ARTIST,
    payload: i
  };
};

export const playSongTrackAction = (i) => {
    return {
        type: PLAY_SONG_TRACK,
        payload: i
    }
}

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
