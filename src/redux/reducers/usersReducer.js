import * as types from "../types";

const initialUsersState = {}

export const usersReducer = (state=initialUsersState, action) => {
    
    switch(action.type) {
        case types.FETCH_USER_SUCCESS:
            return {...state, [action.payload.login]: action.payload.data};
        default:
            return state; 
    }
}
