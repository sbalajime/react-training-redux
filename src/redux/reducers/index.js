import {combineReducers} from "redux";
import countReducer  from "./count";
import loggedInReducer from "./loggedIn";
import userReducer from "./user"

const rootReducer = combineReducers({
    count: countReducer,
    isLoggedIn: loggedInReducer,
    user: userReducer
})

export default rootReducer;