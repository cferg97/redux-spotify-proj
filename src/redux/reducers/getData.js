import { GET_ALBUM_DATA, GET_PILL_DATA, GET_TRACK_DATA } from "../actions";

const initialState = {
    tracks: [],
    albums: [],
    pills: []
}

const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TRACK_DATA:
            return{
                ...state,
                tracks: action.payload
            }
        case GET_ALBUM_DATA:
            return{
                ...state,
                albums: action.payload
            }
        case GET_PILL_DATA:
            return{
                ...state,
                pills: action.payload
            }
        default:
            return state
    }
}

export default dataReducer