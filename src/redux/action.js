import { apiGet } from "../utils/apiHelpers";
import * as types from "./types";
import {useSelector} from "react-redux";

export const callRepoSuccess = (payload, page) => ({
    type: page < 2 ? types.REPO_CALL_SUCCESS : types.UPDATE_USER_SUCCESS,
    payload,
})

export const callUserSuccess = (payload,page) => ({
    type: page < 2? types.USER_CALL_SUCCESS : types.UPDATE_USER_SUCCESS,
    payload,
})

export const userSuccess = (payload) => ({
    type: types.FETCH_USER_SUCCESS,
    payload,
})

 //make call to the api
export const makeCall = ({entity, query, page}) => async (dispatch) => {
    let perPage = 30;

    const {response} = await apiGet(`https://api.github.com/search/${entity}?q=${query}&per_page=${perPage}&page=${page}`);

      if (response.status === 200) {
          dispatch(entity === 'users'? callUserSuccess({ query, data: {...response.data, page}},page) : callRepoSuccess({ query, data:{...response.data, page}},page) )
      }

}


// fetch more user result
// export const loadMoreUserResult = () =>async (dispatch) => {

//     const {entity, query} = useSelector(state => state.searchReducer);
//     const {perPage, page} = useSelector(state => state.userSearchReducer);


//     const {response} = await apiGet(`https://api.github.com/search/${entity}?q=${query}&per_page=${perPage}&page=${page}`);

//     if (response.status === 200) {
//         dispatch(entity === 'users'? callUserSuccess({query, data: response.data}): callRepoSuccess({ query, data: response.data}) )
//     }
    
// }


//fetch more repo result
// export const loadMoreRepoResult = () =>async (dispatch) => {

//     const {entity, query} = useSelector(state => state.searchReducer);
//     const {perPage, page} = useSelector(state => state.repoSearchReducer);


//     const {response} = await apiGet(`https://api.github.com/search/${entity}?q=${query}&per_page=${perPage}&page=${page}`);

//     if (response.status === 200) {
//         dispatch(entity === 'users'? callUserSuccess({query, data: response.data}): callRepoSuccess({ query, data: response.data}) )
//     }

// }
// make get call
export const getCall = (url) => async (dispatch) => {

    const {response} = await apiGet(url);

      if (response.status === 200) {
          dispatch(callRepoSuccess(response.data))
      }
console.log(response.data)

}
// fetch single card users
export const getUsers = (login, url) => async (dispatch) => {

    const {response} = await apiGet(url);

      if (response.status === 200) {
          dispatch(userSuccess({login, data: response.data}));
      }


    console.log(response.data)

}


export const changeParams = (payload) =>({

    type: types.CHANGE_FETCH_PARAM,
    payload
})

