import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { GoEye, GoRepoForked, GoOrganization, GoDiffModified } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/action';
import { ScaleLoader } from "react-spinners";


const RepoCard = ({ item }) => {
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    // Extract a piece of the redux store
    const singleUser = useSelector((state) => state.usersReducer[item.owner.login]);


    //effect hook to fetch data on page mount
    useEffect(() => {
        if (singleUser === undefined) {
            dispatch(getUsers(item.owner.login, item.owner.url)).then(() => {
                setLoading(false);
            });
        }
            // eslint-disable-next-line
    }, [])


    const { name, description, language, license, isPrivate, owner, forks_count, watchers_count, stargazers_count, open_issues_count, url } = item;

    //effect hook to watch out for loading state
    useEffect(() => {

    }, [loading])

    return (
        <StyledRepoCard avatar={owner.avatar_url}>
            <div className="card-repo-type">
                {isPrivate ? "Private" : "Public"}
            </div>
            { loading ? <ScaleLoader /> :

                <div className="repo-content">
                    <div className="repo-bio">
                        <div className="repo-avatar"></div>
                        <div className="repo-title">
                            <a href={url}>
                                <h1>
                                    {name || "Not available"}
                                </h1>
                            </a>
                            <p>Created by <a href={(singleUser || owner).login  && `https://github.com/${(singleUser || owner).login }`}>{(singleUser || owner).login || ""}</a></p>
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
                        <GoOrganization />
                    </span>
                    <span>
                        <AiOutlineStar /><sub>{stargazers_count}</sub>
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
        background-image: ${({ avatar }) => `url(${avatar})`};
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
