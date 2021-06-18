import {combineReducers} from "redux";
import countReducer  from "./count";
import loggedInReducer from "./loggedIn";

const rootReducer = combineReducers({
    count: countReducer,
    isLoggedIn: loggedInReducer
})

export default rootReducer;