import {SET_CITY} from './../actions'
// state = {}, by default se pone un valor nulo 
export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            // ... spread operator, se desglosa/separa el estado inicial y se modifica el valor 
            // del city a traves del action
            return { ...state, city: action.payload }
            default:
                break;
    }
    return state;
}