export function loadItems(actionType, url, name, num = 1 ) {
    let storage = window.localStorage;


    const fetchNow = (dispatch) => {
        fetch(`https://swapi.co/api/${url}/?page=${num}`)
            .then((response) => response.json())
            .then(data => {
                storage.setItem(`${name}${num}`, JSON.stringify(data.results));
                storage.setItem(`${name}${num}Time`, Date.now().toString());
                dispatch({
                    type: actionType,
                    payload: {
                        data: data.results,
                        num: num
                    }
                });
            });
    };



    return dispatch => {
        if (!storage.getItem(`${name}${num}`)) {
            fetchNow(dispatch);
        } else if(Date.now() - +storage.getItem(`${name}${num}Time`) > 5000) {
            fetchNow(dispatch);
        } else {
            dispatch({
                type: actionType,
                payload: {
                    data: JSON.parse(storage.getItem(`${name}${num}`)),
                    num: num

                }
            })
        }
    }

}




