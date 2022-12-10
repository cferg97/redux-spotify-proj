import { SEARCH_FOR_MUSIC, SET_QUERY } from "../actions";

const initialState = {
  query: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
