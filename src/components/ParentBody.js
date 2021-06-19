import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RepoCard from './RepoCard'
import SearcherComponent from './SearcherComponent'
import repoData from '../utils/data/repos.json'
import UserCard from './UserCard'

const ParentBody = ({children}) => {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    setRepo(repoData.items)
  }, [])


    return (
        <StyledParentBody className="parentBody container" >
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
  overflow-y: scroll;
  height: 100vh;
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
