import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RepoCard from './RepoCard'
import SearcherComponent from './SearcherComponent'
import repoData from '../utils/data/repos.json'
import UserCard from './UserCard'

const ParentBody = ({children, onType}) => {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    setRepo(repoData.items)
  }, [])


    return (
        <StyledParentBody className="parentBody container" onType={onType}>
          <SearcherComponent/>
            <div className="card-parent">
                {/* {children} */}
                {/* { repo.map(item => <RepoCard item={item} />)} */}

                    {/* <RepoCard/>
                    <RepoCard/>

                    <RepoCard/>
                    <RepoCard/>
                    <RepoCard/>

                    <RepoCard/> 
                    <RepoCard/>
                    <RepoCard/>

                    <RepoCard/>
                    <RepoCard/>
                    <RepoCard/>

                    <RepoCard/> */}
                {/* <UserCard bio="Sofware Engineer"/>
                <UserCard bio="Sofware Engineer in the ritual making money of selling tomatoes"/>
                <UserCard bio=""/> */}
               

            </div>
         
            
        </StyledParentBody>
    )
}

const StyledParentBody = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  flex-direction: ${({onType})=> onType ? "row" : "column"};
  align-items: ${({onType})=> onType ? "flex-start" : "center"};
  justify-content: ${({onType})=> onType ? "flex-start" : "space-around"};
  height: ${({onType})=> onType ? "100%" : "100vh"};
  /* transition: ${({onType})=> onType ? "all 8s ease" : "none"}; */


  overflow-y: scroll;
  border: 1px white solid;

  .card-parent{
    display: grid;
    grid-gap: 3.5rem;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 33rem));
    width: 100%;
    justify-content: center;
  }

`;

export default ParentBody
