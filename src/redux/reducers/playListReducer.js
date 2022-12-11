import { CREATE_PLAYLIST } from "../actions";

const initialState = {
  list: [],
};

const playListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYLIST:
      return {
        ...state,
        list: [...new Set([...state.list, action.payload])],
      };
    default:
      return state;
  }
};

export default playListReducer