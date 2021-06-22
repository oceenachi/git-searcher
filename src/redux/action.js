import { apiGet } from "../utils/apiHelpers";
import * as types from "./types";

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
export const loading = (payload) => ({
    type: types.LOADING,
    payload,
})

export const error = (payload) => ({
    type: types.LOADING,
    payload,
})

// export const loading = (payload) => ({
//     type: types.LOADING,
//     payload,
// })

 //make call to the api
export const makeCall = ({entity, query, page}) => async (dispatch) => {
    let perPage = 30;

    const {response} = await apiGet(`${process.env.REACT_APP_SEARCH_URL}/${entity}?q=${query}&per_page=${perPage}&page=${page}`);


// users search
//     avatar_url: "https://avatars.githubusercontent.com/u/2916021?v=4"
// events_url: "https://api.github.com/users/legg/events{/privacy}"
// followers_url: "https://api.github.com/users/legg/followers"
// following_url: "https://api.github.com/users/legg/following{/other_user}"
// gists_url: "https://api.github.com/users/legg/gists{/gist_id}"
// gravatar_id: ""
// html_url: "https://github.com/legg"
// id: 2916021
// login: "legg"
// node_id: "MDQ6VXNlcjI5MTYwMjE="
// organizations_url: "https://api.github.com/users/legg/orgs"
// received_events_url: "https://api.github.com/users/legg/received_events"
// repos_url: "https://api.github.com/users/legg/repos"
// score: 1
// site_admin: false
// starred_url: "https://api.github.com/users/legg/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/legg/subscriptions"
// type: "User"
// url: "https://api.github.com/users/legg"


//repo search
// archive_url: "https://api.github.com/repos/YangModels/yang/{archive_format}{/ref}"
// archived: false
// assignees_url: "https://api.github.com/repos/YangModels/yang/assignees{/user}"
// blobs_url: "https://api.github.com/repos/YangModels/yang/git/blobs{/sha}"
// branches_url: "https://api.github.com/repos/YangModels/yang/branches{/branch}"
// clone_url: "https://github.com/YangModels/yang.git"
// collaborators_url: "https://api.github.com/repos/YangModels/yang/collaborators{/collaborator}"
// comments_url: "https://api.github.com/repos/YangModels/yang/comments{/number}"
// commits_url: "https://api.github.com/repos/YangModels/yang/commits{/sha}"
// compare_url: "https://api.github.com/repos/YangModels/yang/compare/{base}...{head}"
// contents_url: "https://api.github.com/repos/YangModels/yang/contents/{+path}"
// contributors_url: "https://api.github.com/repos/YangModels/yang/contributors"
// created_at: "2014-03-21T16:08:37Z"
// default_branch: "master"
// deployments_url: "https://api.github.com/repos/YangModels/yang/deployments"
// description: "YANG modules from standards organizations such as the IETF, The IEEE, The Metro Ethernet Forum, open source such as Open Daylight or vendor specific modules"
// disabled: false
// downloads_url: "https://api.github.com/repos/YangModels/yang/downloads"
// events_url: "https://api.github.com/repos/YangModels/yang/events"
// fork: false
// forks: 908
// forks_count: 908
// forks_url: "https://api.github.com/repos/YangModels/yang/forks"
// full_name: "YangModels/yang"
// git_commits_url: "https://api.github.com/repos/YangModels/yang/git/commits{/sha}"
// git_refs_url: "https://api.github.com/repos/YangModels/yang/git/refs{/sha}"
// git_tags_url: "https://api.github.com/repos/YangModels/yang/git/tags{/sha}"
// git_url: "git://github.com/YangModels/yang.git"
// has_downloads: true
// has_issues: true
// has_pages: false
// has_projects: true
// has_wiki: true
// homepage: ""
// hooks_url: "https://api.github.com/repos/YangModels/yang/hooks"
// html_url: "https://github.com/YangModels/yang"
// id: 17985602
// issue_comment_url: "https://api.github.com/repos/YangModels/yang/issues/comments{/number}"
// issue_events_url: "https://api.github.com/repos/YangModels/yang/issues/events{/number}"
// issues_url: "https://api.github.com/repos/YangModels/yang/issues{/number}"
// keys_url: "https://api.github.com/repos/YangModels/yang/keys{/key_id}"
// labels_url: "https://api.github.com/repos/YangModels/yang/labels{/name}"
// language: "Shell"
// languages_url: "https://api.github.com/repos/YangModels/yang/languages"
// license: null
// merges_url: "https://api.github.com/repos/YangModels/yang/merges"
// milestones_url: "https://api.github.com/repos/YangModels/yang/milestones{/number}"
// mirror_url: null
// name: "yang"
// node_id: "MDEwOlJlcG9zaXRvcnkxNzk4NTYwMg=="
// notifications_url: "https://api.github.com/repos/YangModels/yang/notifications{?since,all,participating}"
// open_issues: 29
// open_issues_count: 29
// owner: {login: "YangModels", id: 7023960, node_id: "MDEyOk9yZ2FuaXphdGlvbjcwMjM5NjA=", avatar_url: "https://avatars.githubusercontent.com/u/7023960?v=4", gravatar_id: "", …}
// permissions: {admin: false, push: false, pull: true}
// private: false
// pulls_url: "https://api.github.com/repos/YangModels/yang/pulls{/number}"
// pushed_at: "2021-06-20T16:28:00Z"
// releases_url: "https://api.github.com/repos/YangModels/yang/releases{/id}"
// score: 1
// size: 86304
// ssh_url: "git@github.com:YangModels/yang.git"
// stargazers_count: 1026
// stargazers_url: "https://api.github.com/repos/YangModels/yang/stargazers"
// statuses_url: "https://api.github.com/repos/YangModels/yang/statuses/{sha}"
// subscribers_url: "https://api.github.com/repos/YangModels/yang/subscribers"
// subscription_url: "https://api.github.com/repos/YangModels/yang/subscription"
// svn_url: "https://github.com/YangModels/yang"
// tags_url: "https://api.github.com/repos/YangModels/yang/tags"
// teams_url: "https://api.github.com/repos/YangModels/yang/teams"
// trees_url: "https://api.github.com/repos/YangModels/yang/git/trees{/sha}"
// updated_at: "2021-06-17T14:49:17Z"
// url: "https://api.github.com/repos/YangModels/yang"
// watchers: 1026
// watchers_count: 1026

    console.log({response3w: response})

      if (response.status === 200 ) {
          if(!response.data.items.length){
              console.log("error found")
              dispatch("No data available");
          }
          if(entity === "users"){

            stripUserSearchData(response);

            dispatch(callUserSuccess({ query, data: {...response.data, page}},page))
          }else{
            stripRepoSearchData(response)
              dispatch(callRepoSuccess({ query, data:{...response.data, page}},page))
          }
        //   dispatch(entity === 'users'? callUserSuccess({ query, data: {...response.data, page}},page) : callRepoSuccess({ query, data:{...response.data, page}},page) )
      }
      dispatch(loading(false));


}


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
        stripUsersData(response)
          console.log(response)
          dispatch(userSuccess({login, data: response.data}));
      }

    console.log(response.data)

}


export const changeParams = (payload) =>({

    type: types.CHANGE_FETCH_PARAM,
    payload
})

const stripUserSearchData = (payload) => {

   
    for(let i=0; i < payload.data.items.length; i++){
        let item = payload.data.items[i];
        console.log({item})
        // const {
        //     name, watchers_count, stargazers_count, contributors_url, open_issues_count, private:isPrivate, owner, full_name,language,license,description,forks_count,
        // } = item;
        // payload.data.items[i] = {name, watchers_count, stargazers_count, contributors_url, open_issues_count, isPrivate, owner, full_name,language,license,description,forks_count}

        const {avatar_url, login, url } = item;
        payload.data.items[i] = {avatar_url, login, url}

    }


}

const stripRepoSearchData = (payload) => {
//     archive_url: "https://api.github.com/repos/tastejs/todomvc/{archive_format}{/ref}"
// archived: false
// assignees_url: "https://api.github.com/repos/tastejs/todomvc/assignees{/user}"
// blobs_url: "https://api.github.com/repos/tastejs/todomvc/git/blobs{/sha}"
// branches_url: "https://api.github.com/repos/tastejs/todomvc/branches{/branch}"
// clone_url: "https://github.com/tastejs/todomvc.git"
// collaborators_url: "https://api.github.com/repos/tastejs/todomvc/collaborators{/collaborator}"
// comments_url: "https://api.github.com/repos/tastejs/todomvc/comments{/number}"
// commits_url: "https://api.github.com/repos/tastejs/todomvc/commits{/sha}"
// compare_url: "https://api.github.com/repos/tastejs/todomvc/compare/{base}...{head}"
// contents_url: "https://api.github.com/repos/tastejs/todomvc/contents/{+path}"
// contributors_url: "https://api.github.com/repos/tastejs/todomvc/contributors"
// created_at: "2011-06-03T19:56:33Z"
// default_branch: "master"
// deployments_url: "https://api.github.com/repos/tastejs/todomvc/deployments"
// description: "Helping you select an MV* framework - Todo apps for React.js, Ember.js, Angular, and many more"
// disabled: false
// downloads_url: "https://api.github.com/repos/tastejs/todomvc/downloads"
// events_url: "https://api.github.com/repos/tastejs/todomvc/events"
// fork: false
// forks: 13885
// forks_count: 13885
// forks_url: "https://api.github.com/repos/tastejs/todomvc/forks"
// full_name: "tastejs/todomvc"
// git_commits_url: "https://api.github.com/repos/tastejs/todomvc/git/commits{/sha}"
// git_refs_url: "https://api.github.com/repos/tastejs/todomvc/git/refs{/sha}"
// git_tags_url: "https://api.github.com/repos/tastejs/todomvc/git/tags{/sha}"
// git_url: "git://github.com/tastejs/todomvc.git"
// has_downloads: true
// has_issues: true
// has_pages: true
// has_projects: false
// has_wiki: true
// homepage: "http://todomvc.com"
// hooks_url: "https://api.github.com/repos/tastejs/todomvc/hooks"
// html_url: "https://github.com/tastejs/todomvc"
// id: 1844251
// issue_comment_url: "https://api.github.com/repos/tastejs/todomvc/issues/comments{/number}"
// issue_events_url: "https://api.github.com/repos/tastejs/todomvc/issues/events{/number}"
// issues_url: "https://api.github.com/repos/tastejs/todomvc/issues{/number}"
// keys_url: "https://api.github.com/repos/tastejs/todomvc/keys{/key_id}"
// labels_url: "https://api.github.com/repos/tastejs/todomvc/labels{/name}"
// language: "JavaScript"
// languages_url: "https://api.github.com/repos/tastejs/todomvc/languages"
// license: {key: "other", name: "Other", spdx_id: "NOASSERTION", url: null, node_id: "MDc6TGljZW5zZTA="}
// merges_url: "https://api.github.com/repos/tastejs/todomvc/merges"
// milestones_url: "https://api.github.com/repos/tastejs/todomvc/milestones{/number}"
// mirror_url: null
// name: "todomvc"
// node_id: "MDEwOlJlcG9zaXRvcnkxODQ0MjUx"
// notifications_url: "https://api.github.com/repos/tastejs/todomvc/notifications{?since,all,participating}"
// open_issues: 173
// open_issues_count: 173
// owner: {login: "tastejs", id: 1733746, node_id: "MDEyOk9yZ2FuaXphdGlvbjE3MzM3NDY=", avatar_url: "https://avatars.githubusercontent.com/u/1733746?v=4", gravatar_id: "", …}
// permissions: {admin: false, push: false, pull: true}
// private: false
// pulls_url: "https://api.github.com/repos/tastejs/todomvc/pulls{/number}"
// pushed_at: "2021-05-31T13:32:58Z"
// releases_url: "https://api.github.com/repos/tastejs/todomvc/releases{/id}"
// score: 1
// size: 73004
// ssh_url: "git@github.com:tastejs/todomvc.git"
// stargazers_count: 27377
// stargazers_url: "https://api.github.com/repos/tastejs/todomvc/stargazers"
// statuses_url: "https://api.github.com/repos/tastejs/todomvc/statuses/{sha}"
// subscribers_url: "https://api.github.com/repos/tastejs/todomvc/subscribers"
// subscription_url: "https://api.github.com/repos/tastejs/todomvc/subscription"
// svn_url: "https://github.com/tastejs/todomvc"
// tags_url: "https://api.github.com/repos/tastejs/todomvc/tags"
// teams_url: "https://api.github.com/repos/tastejs/todomvc/teams"
// trees_url: "https://api.github.com/repos/tastejs/todomvc/git/trees{/sha}"
// updated_at: "2021-06-22T12:18:09Z"
// url: "https://api.github.com/repos/tastejs/todomvc"
// watchers: 27377
// watchers_count: 27377

for(let i=0; i < payload.data.items.length; i++){
    let item = payload.data.items[i];
    console.log({item})
    const {
        name, watchers_count, stargazers_count, contributors_url, open_issues_count, private:isPrivate, owner, full_name,language,license,description,forks_count,
    } = item;
    payload.data.items[i] = {name, watchers_count, stargazers_count, contributors_url, open_issues_count, isPrivate, owner, full_name,language,license,description,forks_count}

}

}

const stripUsersData = (payload) => {
//     avatar_url: "https://avatars.githubusercontent.com/u/457902?v=4"
// bio: null
// blog: "http://www.chenwang.net"
// company: null
// created_at: "2010-10-28T12:19:58Z"
// email: null
// events_url: "https://api.github.com/users/GameXG/events{/privacy}"
// followers: 128
// followers_url: "https://api.github.com/users/GameXG/followers"
// following: 2
// following_url: "https://api.github.com/users/GameXG/following{/other_user}"
// gists_url: "https://api.github.com/users/GameXG/gists{/gist_id}"
// gravatar_id: ""
// hireable: true
// html_url: "https://github.com/GameXG"
// id: 457902
// location: null
// login: "GameXG"
// name: "GameXG"
// node_id: "MDQ6VXNlcjQ1NzkwMg=="
// organizations_url: "https://api.github.com/users/GameXG/orgs"
// public_gists: 26
// public_repos: 88
// received_events_url: "https://api.github.com/users/GameXG/received_events"
// repos_url: "https://api.github.com/users/GameXG/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/GameXG/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/GameXG/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2021-05-09T01:35:53Z"
// url: "https://api.github.com/users/GameXG"

// for(let i=0; i < payload.data.items.length; i++){
    let userItem = payload.data;
    console.log({userItem})
    const {
        bio, avatar_url, email, followers, following, hireable, location, login, name, twitter_username,url
    } = userItem;

    payload.data= {bio, avatar_url, email, followers, following, hireable, location, login, name,twitter_username,url
    // }

}

}

