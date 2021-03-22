import { SET_IS_ANIMATION } from "./actions";

const initialState = {
    isAnimation: false
}

export const animationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_ANIMATION:
            return {
                ...state, isAnimation: action.payload
            }
        default:
            return state
    }
}