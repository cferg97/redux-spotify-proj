import { LIKE_SONG, REMOVE_LIKE_SONG } from "../actions";

const initialState = {
  list: [],
};

const likedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_SONG:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_LIKE_SONG:
      return {
        ...state,
        list: state.list.filter((song, i) => {
          return i !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default likedSongsReducer