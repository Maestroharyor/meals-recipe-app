import { AnyAction } from "redux";
import { filterDataType } from "../../data/dataTypes";

export const actionTypes = {
    SET_FILTERS: 'SET_FILTERS',
    CLEAR_FILTERS: 'CLEAR_FILTERS'
    
};

export function setFilters(filters:filterDataType):AnyAction{
    return {type: actionTypes.SET_FILTERS, filters}
}


export function clearFilters():AnyAction{
    return {type: actionTypes.CLEAR_FILTERS}
}