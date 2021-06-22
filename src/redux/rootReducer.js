import {combineReducers} from 'redux';
import { searchReducer} from "./reducers/searchReducer";
import { userSearchReducer } from "./reducers/userSearchReducer";
import { errorReducer } from "./reducers/errorReducer";
import { repoSearchReducer } from "./reducers/repoSearchReducer";
import { usersReducer } from "./reducers/usersReducer";






const rootReducer = combineReducers({
    repoSearchReducer, userSearchReducer, searchReducer, usersReducer, errorReducer
});

export default rootReducer;
