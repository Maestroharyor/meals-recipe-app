import { Reducer } from "redux";
import { filterDataType } from "../../data/dataTypes";
import { actionTypes } from "./action";

const initialState:filterDataType = {
        isGlutenFree: false,
        isLactoseFree: false,
        isVegan: false,
        isVegetarian: false,
}

const reducer:Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FILTERS:
            return {...state, ...action.filters}
        case actionTypes.CLEAR_FILTERS:
            return {...state}
    
        default:
            return state;
    }

}

export default reducer