const initialState = {
    moviesList: []
};
export function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_MOVIES':
            return { ...state, moviesList: action.payload };
        default:
            return state
    }

}
