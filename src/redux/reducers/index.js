
import { combineReducers } from "redux";
import getFilmsReducers from "./FilmsReducers";

const rootReducer = combineReducers({
    films: getFilmsReducers
})

export default rootReducer;