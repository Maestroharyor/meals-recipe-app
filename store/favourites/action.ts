export const actionTypes = {
    TOGGLE_FAVORITES: 'TOGGLE_FAVORITES',
    CLEAR_FAVORTIES: 'CLEAR_FAVORTIES',
    
};

export function toggleFavorites(mealId: string){
    return {type: actionTypes.TOGGLE_FAVORITES, mealId}
}


export function clearFavorites(){
    return {type: actionTypes.CLEAR_FAVORTIES}
}