import { reducerCases } from "../utils/constants";

export const intialState ={
    token:null,
    selectedPlaylistId: "37i9dQZF1E38nNw7o4qbyq",
    selectedPlaylist: null,
};


const reducer = (state,action) =>
{
    switch(action.type) {
        case reducerCases.SET_TOKEN:
            return {
              ...state,
              token: action.token,
            };
        case reducerCases.SET_USER:
            return {
              ...state,
              userInfo: action.userInfo,
            };
        case reducerCases.SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists,
            };
        case reducerCases.SET_PLAYLIST:
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            };
        default:
            return state;
    }
          
};

export default reducer;