import * as types from "../types";

const repoReducer = (state={}, action) => {
    switch(action.type) {
        case types.CALL_SUCCESS:
            return {...state, data:action.payload};
        default:
            return state; 
    }
}


export default repoReducer;