import {actions} from "../config";

const DefaultState = function() {
    return {
        list: [],
        visitedPages: {}
    }
};


function loadReducerCreator(defaultState, actionName) {
    return function (state = defaultState, action) {
        switch (action.type) {
            case actionName:
                const {num, data} = action.payload;
                const newList = state.list;
                newList[num-1] = data;
                const newVisitedPages = {...state.visitedPages, [num]: Date.now().toString()};
                return { ...state, list : newList, visitedPages: newVisitedPages};
            default:
                return state
        }
    }
}


const defaultCurrentPage = {
    data: {}
};


export const currentPageReducer = (state = defaultCurrentPage, action) => {
    switch (action.type) {
        case actions.SET_PERSONAL_PAGE:
            return { ...state, data: {...action.payload}};
        default:
            return state
    }
};

export const moviesReducer = loadReducerCreator(new DefaultState(), actions.LOAD_MOVIES);
export const personsReducer = loadReducerCreator(new DefaultState(), actions.LOAD_PERSONS);
export const vehiclesReducer = loadReducerCreator(new DefaultState(), actions.LOAD_VEHICLES);

