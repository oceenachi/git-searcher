import * as types from "../types";

const initialErrorState = {error: false, message: ""}

export const errorReducer = (state=initialErrorState, action) => {
    
    switch(action.type) {
        case types.ERROR:
            return {...state, message: action.payload.message};
        default:
            return state; 
    }
}

