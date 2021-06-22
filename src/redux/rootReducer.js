import {combineReducers} from 'redux';
import { repoSearchReducer, userSearchReducer, usersReducer, searchReducer, errorReducer} from "./reducers/entityReducer";


const rootReducer = combineReducers({
    repoSearchReducer, userSearchReducer, searchReducer, usersReducer, errorReducer
});

export default rootReducer;
