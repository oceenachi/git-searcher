import {combineReducers} from 'redux';
import { repoSearchReducer, userSearchReducer, usersReducer, searchReducer} from "./reducers/entityReducer";


const rootReducer = combineReducers({
    repoSearchReducer, userSearchReducer, searchReducer, usersReducer
});

export default rootReducer;
