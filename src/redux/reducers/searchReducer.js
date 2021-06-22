import * as types from "../types";

const initialSearchState = {query: "", entity: 'user', load: false}


export const searchReducer = (state=initialSearchState, action) => {
    
    switch(action.type) {
        case types.CHANGE_FETCH_PARAM:
            return {...state, query: action.payload.query, entity: action.payload.entity}
        case types.LOADING:
            return {...state, load: action.payload}
        default:
            return state; 
    }
}



