import * as types from "../types";

const initialReposState = {}

export const repoSearchReducer = (state=initialReposState, action) => {
    
    switch(action.type) {
        case types.REPO_CALL_SUCCESS:
            return {...state, [action.payload.query]: action.payload.data};

        case types.UPDATE_REPO_SUCCESS:
            let queryState = state[action.payload.query] || [];
            let items = queryState.items.concat(action.payload.data.items);
            let data = {...action.payload.data, items};
            return {...state, [action.payload.query]: data}
        default:
            return state;
    }
}
