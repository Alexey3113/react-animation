import { SET_PROFILE, SET_THEME } from "./actions";

const initialState = {
    profile: null,
    theme: "light"
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state, profile: action.payload}
        case SET_THEME:
            return {...state, theme: action.payload}
        default:
            return state;
    }
}