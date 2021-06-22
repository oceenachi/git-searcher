import * as types from "../types";

const initialReposState = {}

export const repoSearchReducer = (state=initialReposState, action) => {
    
    switch(action.type) {
        case types.REPO_CALL_SUCCESS:
            return {...state, [action.payload.query]: action.payload.data};
        default:
            return state; 
    }
}
