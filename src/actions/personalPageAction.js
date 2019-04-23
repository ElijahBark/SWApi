import {actions} from "../config";

export function personalPageActionCreator(data) {
    return {
        type: actions.SET_PERSONAL_PAGE,
        payload:data
    }
}