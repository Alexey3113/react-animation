import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension"

import {profileReducer} from "./profile"
import {animationReducer} from "./animation"
import { postsReducer } from "./posts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const allReducers = combineReducers({
    profile: profileReducer,
    animation: animationReducer,
    posts: postsReducer
})

export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))