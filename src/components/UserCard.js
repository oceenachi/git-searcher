import React from 'react'
import styled from 'styled-components';
import { GoRepo } from "react-icons/go";
import { BsBuilding, BsEnvelope, BsFileCode, BsLink45Deg, BsStar, BsPeople } from "react-icons/bs";
import { VscTwitter } from "react-icons/vsc"


const UserCard = ({bio}) => {
    console.log({bio})
    return (
        <StyledUserCard>
            <div className="full-card">
                <div className="top-section">
                    <div className="avatar-box">
                        <img src="/images/avatar.png" alt="" className="avater"/>
                    </div>
                    <div className="brief-intro">
                        <p className="info full-name">Asami Sato</p>
                        <p className="info login">@login</p>
                        <p className="info bio" title={bio}>{bio.split(" ").length > 8 ? bio.split(" ").slice(0, 8).join(" ") + "..." : bio}</p>
                        
                    </div>
                </div>
            </div>
            <div>
                <div className="bottom-section">
                    <hr />
                    <p title="Email" className="info email">
                        <span className="git-icon">
                            <BsEnvelope />
                        </span>
                        AsamiSato@gmail.com
                    </p>
                    <p title="Personal Website" className="info website">
                        <span className="git-icon">
                            <BsLink45Deg />
                        </span>
                        <a href="https://www.giftegwuenu.dev/" target="_blank">https://www.giftegwuenu.dev/</a>
                    </p>
                    <p title="Twitter" className="info twitter">
                        <span className="git-icon">
                            <VscTwitter />
                        </span>
                        <a href="https://www.giftegwuenu.dev/" target="_blank">@code_cuddle</a>
                    </p>
                    <p title="Company" className="info Company">
                        <span className="git-icon">
                            <BsBuilding />
                        </span>
                         @decagonhq
                    </p>
                    
                    <p className="info">Open To Hire: Yes</p>
                </div>
                <div className="activity-section">
                    <p title="Repositories"><span className="git-icon"><GoRepo /></span> 150</p>
                    <p title="Github Gist"><span className="git-icon"><BsFileCode className="edit-icon"/></span> 10</p>
                    <p title="Followers"><span className="git-icon"><BsPeople /></span> 10</p>
                    <p title="Following"><span className="git-icon"><BsPeople /></span> 10</p>
                    <p title="Github Star"><span className="git-icon"><BsStar /></span> 10</p>
                </div>
            </div>
            
        </StyledUserCard>
    )
}

const StyledUserCard = styled.div`
    font-size: 1.4rem;
    line-height: 1.5;
    border-radius: 15px;
    background-color: #161b22;
    border: 1px solid #21262d;
    min-height:  300px;
    color: var(--textWhite);
    /* overflow-y: hidden; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a{
        color: var(--textWhite);
        text-decoration: none;
        :hover,
        :focus{
            color: grey;
            text-decoration: underline;
        }
    }

    .full-card{
        padding: 20px 10px 1px 10px;    
    }
    .bio{
        word-break: break-word;
    }
    .top-section{
        font-size: 2.4rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    hr{
        margin-bottom: 1rem;
        border: 1px solid #2ea043;
    }
    .top-section .avatar-box{
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .top-section .avatar-box .avatar{
        width: 100%;
    }
    .top-section .brief-intro{
        width: 100%;
    }
    .top-section .brief-intro .full-name{
        font-weight: 600;
        line-height: 1.25;
    }
    .top-section .brief-intro .login{
        font-weight: 300;
        color: #8b949e;
        font-size: 2rem;
        line-height: 24px;
    }
    .top-section .brief-intro .bio{
        font-size: 1.4rem;
        line-height: 1.5;
    }
    .info .git-icon{
        margin-right: .9rem;
    }
    .bottom-section{
        /* border-top: 2px solid #2ea043; */
        padding: 1rem 1rem .5rem 1rem;
    }
    .activity-section{
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        padding: 1rem;
        color: white;
        background: #2ea043;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;

    }
    .activity-section .git-icon{
        margin-right: .1rem;
    }
    .edit-icon{
        font-weight: fill;
    }

    
`;

export default UserCard
