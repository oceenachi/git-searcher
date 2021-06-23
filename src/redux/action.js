import { apiGet } from "../utils/apiHelpers";
import * as types from "./types";


// action to dispatch repo search success
export const callRepoSuccess = (payload, page) => ({
    type: page < 2 ? types.REPO_CALL_SUCCESS : types.UPDATE_USER_SUCCESS,
    payload,
})

// action to dispatch user search success
export const callUserSuccess = (payload, page) => ({
    type: page < 2 ? types.USER_CALL_SUCCESS : types.UPDATE_USER_SUCCESS,
    payload,
})

// action to dispatch single user success state
export const userSuccess = (payload) => ({
    type: types.FETCH_USER_SUCCESS,
    payload,
})


// action to dispatch loading state
export const loading = (payload) => ({
    type: types.LOADING,
    payload,
})

// action to dispatch error state
export const error = (payload) => ({
    type: types.ERROR,
    payload,
})



//make call to the api to search for quert
export const makeCall = ({ entity, query, page }) => async (dispatch) => {
    if (query.trim().length < 3 ) {
        
    } else{
        let perPage = 30;
    
        const { response } = await apiGet(`${process.env.REACT_APP_SEARCH_URL}/${entity}?q=${query}&per_page=${perPage}&page=${page}`);
    
        if (response.status === 200) {

            if (!response.data.items.length) {
                dispatch(error("No data available"));
            }
            if (entity === "users") {
    
                stripUserSearchData(response);
    
                dispatch(callUserSuccess({ query, data: { ...response.data, page } }, page))
            } else {
                stripRepoSearchData(response)
                dispatch(callRepoSuccess({ query, data: { ...response.data, page } }, page))
            }
        }
    }
    dispatch(loading(false));


}


// make get call
export const getCall = (url) => async (dispatch) => {

    const { response } = await apiGet(url);

    if (response.status === 200) {
        dispatch(callRepoSuccess(response.data))
    }

}

// export const fetchObjectAndCount = (url) => async (dispatch) => {
//     const {response} = await apiGet();
// }


// fetch single card users
export const getUsers = (login, url) => async (dispatch) => {

    const { response } = await apiGet(url);

    if (response.status === 200) {
        stripUsersData(response)
        dispatch(userSuccess({ login, data: response.data }));
    }

}

//action to change input params
export const changeParams = (payload) => ({

    type: types.CHANGE_FETCH_PARAM,
    payload
})

//custom method to strip unneccessary data from user object
const stripUserSearchData = (payload) => {

    for (let i = 0; i < payload.data.items.length; i++) {
        let item = payload.data.items[i];

        const { avatar_url, login, url, id } = item;
        payload.data.items[i] = { avatar_url, login, url , id}

    }
}

//custom method to strip unneccessary data from repo object
const stripRepoSearchData = (payload) => {

    for (let i = 0; i < payload.data.items.length; i++) {
        let item = payload.data.items[i];
        const {
            name, watchers_count, stargazers_count, contributors_url, open_issues_count, private: isPrivate, owner, full_name, language, license, description, forks_count, url,id
        } = item;
        payload.data.items[i] = { name, watchers_count, stargazers_count, contributors_url, open_issues_count, isPrivate, owner, full_name, language, license, description, forks_count, url,id }

    }

}


//custom method to strip unneccessary data from user object
const stripUsersData = (payload) => {
    let userItem = payload.data;
    const {
        bio, avatar_url, email, followers, following, hireable, location, login, name, twitter_username, url, repos_url, gists_url, starred_url
    } = userItem;

    payload.data = {
        bio, avatar_url, email, followers, following, hireable, location, login, name, twitter_username, url, repos_url, gists_url, starred_url


    }

}

