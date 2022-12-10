import { PLAY_SONG_ARTIST, PLAY_SONG_TRACK, PLAY_SONG_ART } from "../actions";

const initialState = {
    track: "",
    artist: "",
    art: "",
}

const playSongReducer = (state = initialState, action) => {
    switch(action.type){
        case PLAY_SONG_ARTIST:
            return{
                ...state,
                artist: action.payload,
            }
        
        case PLAY_SONG_TRACK:
            return{
                ...state,
                track: action.payload
            }

        case PLAY_SONG_ART:
            return{
                ...state,
                art: action.payload
            }
        
        default:
            return state


    }
}

export default playSongReducer