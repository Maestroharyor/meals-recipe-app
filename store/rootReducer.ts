import { combineReducers } from "redux";
import filters from "./filters/reducer";
import favorites from "./favourites/reducer";

export default combineReducers({
    filters,
    favorites
})