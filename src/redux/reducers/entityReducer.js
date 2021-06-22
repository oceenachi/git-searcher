import * as types from "../types";

const initialReposState = {}
const initialUsersState = {}
const initialSearchState = {query: "", entity: 'user', load: false}
const initialErrorState = {error: false, message: ""}



export const repoSearchReducer = (state=initialReposState, action) => {

    console.log(action.payload)
    
    switch(action.type) {
        case types.REPO_CALL_SUCCESS:
            return {...state, [action.payload.query]: action.payload.data};
        default:
            return state; 
    }
}


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

export const usersReducer = (state=initialUsersState, action) => {
    
    switch(action.type) {
        case types.FETCH_USER_SUCCESS:
            return {...state, [action.payload.login]: action.payload.data};
        default:
            return state; 
    }
}


export const errorReducer = (state=initialErrorState, action) => {
    
    switch(action.type) {
        case types.ERROR:
            return {...state, message: action.payload.message};
        default:
            return state; 
    }
}


