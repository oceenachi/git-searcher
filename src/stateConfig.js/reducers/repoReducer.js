import { REPOSUCCESS } from "../types";

const repoReducer = (state={}, action) => {
    switch(action.type) {
        case REPOSUCCESS:
            return "success";
        default:
            return state; 
    }
}


export default repoReducer;