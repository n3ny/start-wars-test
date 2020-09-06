
import { combineReducers } from "redux";
import getFilmsReducers from "./FilmsReducers";

const rootReducer = combineReducers({
    pockemons: getFilmsReducers
})

export default rootReducer;