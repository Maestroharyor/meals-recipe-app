import { Reducer } from "redux";
import {MEALS} from "../../data/data"
import { MealsDataType } from "../../data/dataTypes";
import { actionTypes } from "./action";

const initialState:MealsDataType[] = []

const reducer:Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_FAVORITES:
            const mealsIndex = state.findIndex((meal:MealsDataType) => meal.id === action.mealId);
            if(mealsIndex !== -1){
                const filteredMeal = state.filter((meal:MealsDataType) => meal.id!== action.mealId);
                return [...filteredMeal]
            } else{
                const mealToAdd = MEALS.filter((meal: MealsDataType) => meal.id === action.mealId);
                return [...state, ...mealToAdd]

            }

        case actionTypes.CLEAR_FAVORTIES:
            return [...state]
    
        default:
            return state;
    }

}

export default reducer;