import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { GoEye, GoRepoForked, GoOrganization, GoDiffModified } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../redux/action';
import {ScaleLoader} from "react-spinners"; 


const RepoCard = ({ item }) => {
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const singleUser = useSelector((state) => state.usersReducer[item.owner.login]);


    //effect hook to fetch data on page mount
    useEffect(() => {
        if(singleUser === undefined){
            dispatch(getUsers(item.owner.login, item.owner.url)).then(() => {
                setLoading(false);
            });
        }

    }, [])
    // contributors_url: "https://api.github.com/repos/YangModels/yang/contributors"



    

    // console.log({singleUser});

    /*
archive_url: "https://api.github.com/repos/mikegcoleman/todo/{archive_format}{/ref}"
archived: false
assignees_url: "https://api.github.com/repos/mikegcoleman/todo/assignees{/user}"
blobs_url: "https://api.github.com/repos/mikegcoleman/todo/git/blobs{/sha}"
branches_url: "https://api.github.com/repos/mikegcoleman/todo/branches{/branch}"
clone_url: "https://github.com/mikegcoleman/todo.git"
collaborators_url: "https://api.github.com/repos/mikegcoleman/todo/collaborators{/collaborator}"
comments_url: "https://api.github.com/repos/mikegcoleman/todo/comments{/number}"
commits_url: "https://api.github.com/repos/mikegcoleman/todo/commits{/sha}"
compare_url: "https://api.github.com/repos/mikegcoleman/todo/compare/{base}...{head}"
contents_url: "https://api.github.com/repos/mikegcoleman/todo/contents/{+path}"
contributors_url: "https://api.github.com/repos/mikegcoleman/todo/contributors"
created_at: "2018-05-16T03:03:12Z"
default_branch: "master"
deployments_url: "https://api.github.com/repos/mikegcoleman/todo/deployments"
description: "Simple todo app built using Express, Mongo, and Node"
disabled: false
downloads_url: "https://api.github.com/repos/mikegcoleman/todo/downloads"
events_url: "https://api.github.com/repos/mikegcoleman/todo/events"
fork: false
forks: 57
forks_count: 57
forks_url: "https://api.github.com/repos/mikegcoleman/todo/forks"
full_name: "mikegcoleman/todo"
git_commits_url: "https://api.github.com/repos/mikegcoleman/todo/git/commits{/sha}"
git_refs_url: "https://api.github.com/repos/mikegcoleman/todo/git/refs{/sha}"
git_tags_url: "https://api.github.com/repos/mikegcoleman/todo/git/tags{/sha}"
git_url: "git://github.com/mikegcoleman/todo.git"
has_downloads: true
has_issues: true
has_pages: false
has_projects: true
has_wiki: true
homepage: null
hooks_url: "https://api.github.com/repos/mikegcoleman/todo/hooks"
html_url: "https://github.com/mikegcoleman/todo"
id: 133602815
issue_comment_url: "https://api.github.com/repos/mikegcoleman/todo/issues/comments{/number}"
issue_events_url: "https://api.github.com/repos/mikegcoleman/todo/issues/events{/number}"
issues_url: "https://api.github.com/repos/mikegcoleman/todo/issues{/number}"
keys_url: "https://api.github.com/repos/mikegcoleman/todo/keys{/key_id}"
labels_url: "https://api.github.com/repos/mikegcoleman/todo/labels{/name}"
language: "CSS"
languages_url: "https://api.github.com/repos/mikegcoleman/todo/languages"
license: null
merges_url: "https://api.github.com/repos/mikegcoleman/todo/merges"
milestones_url: "https://api.github.com/repos/mikegcoleman/todo/milestones{/number}"
mirror_url: null
name: "todo"
node_id: "MDEwOlJlcG9zaXRvcnkxMzM2MDI4MTU="
notifications_url: "https://api.github.com/repos/mikegcoleman/todo/notifications{?since,all,participating}"
open_issues: 4
open_issues_count: 4
owner: {login: "mikegcoleman", id: 6797199, node_id: "MDQ6VXNlcjY3OTcxOTk=", avatar_url: "https://avatars.githubusercontent.com/u/6797199?v=4", gravatar_id: "", …}
private: false
pulls_url: "https://api.github.com/repos/mikegcoleman/todo/pulls{/number}"
pushed_at: "2020-09-06T21:04:37Z"
releases_url: "https://api.github.com/repos/mikegcoleman/todo/releases{/id}"
score: 1
size: 1012
ssh_url: "git@github.com:mikegcoleman/todo.git"
stargazers_count: 79
stargazers_url: "https://api.github.com/repos/mikegcoleman/todo/stargazers"
statuses_url: "https://api.github.com/repos/mikegcoleman/todo/statuses/{sha}"
subscribers_url: "https://api.github.com/repos/mikegcoleman/todo/subscribers"
subscription_url: "https://api.github.com/repos/mikegcoleman/todo/subscription"
svn_url: "https://github.com/mikegcoleman/todo"
tags_url: "https://api.github.com/repos/mikegcoleman/todo/tags"
teams_url: "https://api.github.com/repos/mikegcoleman/todo/teams"
trees_url: "https://api.github.com/repos/mikegcoleman/todo/git/trees{/sha}"
updated_at: "2021-04-24T15:18:57Z"
url: "https://api.github.com/repos/mikegcoleman/todo"
watchers: 79
watchers_count: 79



avatar_url: "https://avatars.githubusercontent.com/u/6797199?v=4"
events_url: "https://api.github.com/users/mikegcoleman/events{/privacy}"
followers_url: "https://api.github.com/users/mikegcoleman/followers"
following_url: "https://api.github.com/users/mikegcoleman/following{/other_user}"
gists_url: "https://api.github.com/users/mikegcoleman/gists{/gist_id}"
gravatar_id: ""
html_url: "https://github.com/mikegcoleman"
id: 6797199
login: "mikegcoleman"
node_id: "MDQ6VXNlcjY3OTcxOTk="
organizations_url: "https://api.github.com/users/mikegcoleman/orgs"
received_events_url: "https://api.github.com/users/mikegcoleman/received_events"
repos_url: "https://api.github.com/users/mikegcoleman/repos"
site_admin: false
starred_url: "https://api.github.com/users/mikegcoleman/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/mikegcoleman/subscriptions"
type: "User"
url: "https://api.github.com/users/mikegcoleman"
    */

    const { name, description, language, license, private: isPrivate, owner, forks_count, watchers_count, stargazers_count, open_issues_count } =  item;

    //effect hook to watch out for loading state
    useEffect(() => {

    }, [loading])

    return (
        <StyledRepoCard avatar={owner.avatar_url}>
            <div className="card-repo-type">
             {isPrivate ? "Private" : "Public"}
            </div>
        { loading ? <ScaleLoader/> :   
        
            <div className="repo-content">
                <div className="repo-bio">
                    <div className="repo-avatar"></div>
                    <div className="repo-title">
                        <a href={"#"}>
                            <h1>
                                {name || ""}
                            </h1>
                        </a>
                        <p>Created by <a href={"#"}>{(singleUser||owner).login || ""}</a></p>
                    </div>
                </div>
                <p className="repo-description">
                    Descriprion: {description}
                </p>
            </div>}
            <div className="repo-info">
                <div className="repo-lang-license">
                    <p>Language: {language || "Java"}</p>
                    <p>License: {license?.spdx_id || "MIT"}</p>
                </div>

                <div className="repo-icons">
                    <span>
                        <GoRepoForked /> <sub>{forks_count}</sub>
                    </span>
                    <span>
                        <GoDiffModified /><sub>{open_issues_count}</sub>
                    </span>
                    <span>
                        <GoEye /><sub>{watchers_count}</sub>
                    </span>
                    <span>
                        <AiOutlineStar /><sub>{stargazers_count}</sub>
                    </span>
                    <span>
                        <GoOrganization />
                    </span>

                </div>
            </div>


        </StyledRepoCard>
    )
}
const StyledRepoCard = styled.div`
    font-size: 1.4rem;
    line-height: 1.5;
    background-color: #161b22;
    border: 1px solid #21262d;
    border-radius: 15px;
    min-height:  300px;
    color: var(--textWhite);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    a{
        color: var(--textWhite);
        text-decoration: none;
        :hover,
        :focus{
            color: grey;
            text-decoration: underline;
        }
    }

    .card-repo-type{
        position: absolute;
        right: 10px;
        top: 4px;
        background: gray;
        color: white;
        border-radius: 5px;
        padding: 2px;
        font-size: 1.4rem;
    }
    .repo-content{
        padding: 2rem 1rem 0 1rem;
    }

    .repo-bio{
        display: flex;
        margin: 5px 0 8px 0;
        h1{
            font-weight: 600;
            font-size: 2rem;
            line-height: 1.25;
            margin-bottom: .1rem;
        }
    }
    .repo-title{
        max-width: 70%;
        word-break: break-word;
        flex-direction: column;
        justify-content: center;
        display: flex;
        
    }
    .repo-info p{
        padding: 0 1rem;
        font-size: small;
    }

    .repo-avatar{
        border-radius: 50%;
        width: 60px;
        height: 60px;
        margin-right: 15px;
        background-image: ${({avatar}) => `url(${avatar})`};
        background-repeat: no-repeat;
        background-size: cover;
        border: 1px gray solid;
    }
    .repo-icons{
        border-top: .1px gray solid;
        height: 45px;
        display: flex;
        padding: 0 1rem;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: white;
        background: #2ea043;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    .repo-lang-license {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 5px;
    }

`;

export default RepoCard
