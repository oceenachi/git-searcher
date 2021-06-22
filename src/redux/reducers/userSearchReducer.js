import * as types from "../types";


const initialUsersState = {}

export const userSearchReducer = (state=initialUsersState, action) => {
    
    switch(action.type) {

        case types.USER_CALL_SUCCESS:
            return {...state, [action.payload.query]: action.payload.data};

        case types.UPDATE_USER_SUCCESS:
            let queryState = state[action.payload.query]||[];
            let items = queryState.items.concat(action.payload.data.items);
            let data = {...action.payload.data, items};
            return {...state, [action.payload.query]: data}
        default:
            return state; 
    }
}