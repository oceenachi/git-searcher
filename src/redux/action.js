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

 //make call to the api
export const makeCall = ({entity, query, page}) => async (dispatch) => {
    let perPage = 30;

    const {response} = await apiGet(`https://api.github.com/search/${entity}?q=${query}&per_page=${perPage}&page=${page}`);
    // debugger


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

    console.log({response3: response})

      if (response.status === 200) {
          dispatch(entity === 'users'? callUserSuccess({ query, data: {...response.data, page}},page) : callRepoSuccess({ query, data:{...response.data, page}},page) )
      }

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
          dispatch(userSuccess({login, data: response.data}));
      }


    console.log(response.data)

}


export const changeParams = (payload) =>({

    type: types.CHANGE_FETCH_PARAM,
    payload
})

const stripData = (payload) => {

}

