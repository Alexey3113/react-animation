import { CLEAR, SET_LOADING, SET_POSTS } from "./actions";

const initialState = {
    posts: [],
    isLoading: false
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state, 
                posts: action.payload
            }
        case SET_LOADING:
            return {
                ...state, 
                isLoading: action.payload
            }
        case CLEAR:
            return {
                ...state, 
                posts: []
            }
        default:
            return state
    }
}