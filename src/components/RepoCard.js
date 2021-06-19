import React from 'react'
import styled from 'styled-components';
import { GoEye, GoRepoForked, GoOrganization, GoDiffModified } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";



const RepoCard = ({ item }) => {

    const { name, username, description, avatar, fork, contributions, watch, stars, organization, language, license, private: isPrivate, full_name: fullName } =  item;
    return (
        <StyledRepoCard>
            <div className="card-repo-type">
                {isPrivate ? "Private" : "Public"}
            </div>
            <div className="repo-content">
                <div className="repo-bio">
                    <div className="repo-avatar"></div>
                    <div className="repo-title">
                        <a href={"#"}>
                            <h1>
                                {fullName || "decagonhq/fellowship-FE"}
                            </h1>
                        </a>
                        <p>Created by <a href={"#"}>{avatar || "@avatar"}</a></p>
                    </div>
                </div>
                <p className="repo-description">
                    Descriprion: {description || "A software engineer based in lagos Nigeria"}
                </p>
            </div>
            <div className="repo-info">
                <div className="repo-lang-license">
                    <p>Language: {language || "Java"}</p>
                    <p>License: {license.spdx_id || "MIT"}</p>
                </div>

                <div className="repo-icons">
                    <span>
                        <GoRepoForked /> {3}
                    </span>
                    <span>
                        <GoDiffModified />
                    </span>
                    <span>
                        <GoEye />
                    </span>
                    <span>
                        <AiOutlineStar />
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
    /* font-size: 16px; */
    /* letter-spacing: .3px; */
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
        /* margin: 2rem 0 0 0; */
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
    /* .repo-info-alert{
        width: 20px;
        height: 20px;
        display: inline-block;
        border: 1px white solid;
        border-radius: 50%;
    } */

    .repo-avatar{
        border-radius: 50%;
        width: 60px;
        height: 60px;
        margin-right: 15px;
        background-image: url("./images/wallon.png");
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
