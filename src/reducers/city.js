import {SET_CITY} from './../actions'
// state = {}, by default se pone un valor nulo 
export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
                return action.payload; 
            default:
                return state;   
    }  
}