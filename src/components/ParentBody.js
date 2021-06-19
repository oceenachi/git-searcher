import React, { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'
import RepoCard from './RepoCard'
import SearcherComponent from './SearcherComponent'
import repoData from '../utils/data/repos.json'
import UserCard from './UserCard';
import {useDispatch} from "react-redux";
import { makeCall } from '../redux/action'

const ParentBody = ({children}) => {

  const dispatch = useDispatch();
  const [repo, setRepo] = useState([])
  const [onType, setOnType] = useState(true);

  // useEffect(() => {
  //   setRepo(repoData.items)
  // }, [])

// setTimeout(()=> {
//   setOnType(true);

// }, 5000)
  

  useEffect(()=> {
    dispatch(makeCall())
  }, [])


    return (
        <StyledParentBody className="parentBody container" onType={true}>
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

const rotate = keyframes`
from{
  left: 200px;
  top: 200px;
}
to{
  left: 0;
  top: 0;
}

`;

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
  position: relative;
  /* transition: ${({onType})=> onType ? "all 8s ease" : "none"}; */
  /* transition:  all 8s ease; */
  animation: ${({onType}) => onType ? rotate: null} 2s linear;

  

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
