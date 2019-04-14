export function changeMovies() {
    return dispatch => {
        if (!window.localStorage.getItem('movies')) {
            fetch('https://swapi.co/api/films')
                .then((response) => response.json())
                .then(data => {
                    window.localStorage.setItem('movies', JSON.stringify(data.results));
                    dispatch({
                        type: "CHANGE_MOVIES",
                        payload: data.results
                    })
                });
        } else {
            dispatch({
                type: "CHANGE_MOVIES",
                payload: JSON.parse(window.localStorage.getItem('movies'))
            })
        }
    }
}