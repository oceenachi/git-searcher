import React from 'react'
import styled from 'styled-components'
import RepoCard from './RepoCard'
import SearcherComponent from './SearcherComponent'

const ParentBody = ({children}) => {
    return (
        <StyledParentBody className="parentBody container" >
          <SearcherComponent/>
            <div className="card-parent">
                {/* {children} */}

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


            </div>
         
            
        </StyledParentBody>
    )
}

const StyledParentBody = styled.div`

  border: 1px white solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;

  .card-parent{
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    /* grid-template-columns: repeat(auto-fit, minmax(28rem, 36rem)); */
    width: 100%;
  }

`;

export default ParentBody
