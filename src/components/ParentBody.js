import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import styled, {keyframes} from 'styled-components'
import RepoCard from './RepoCard'
import SearcherComponent from './SearcherComponent'
import UserCard from './UserCard';
import {useDispatch} from "react-redux";
import configStore from "../redux/configureStore";
import InfiniteScroll from 'react-infinite-scroll-component';
import { MoonLoader } from 'react-spinners';
import { makeCall } from '../redux/action';


const ParentBody = ({onType}) => {



  console.log({dat: configStore.store.getState()})
  const dispatch = useDispatch();


  const [data, setData] = useState(null);
  
  const entity = useSelector((state) => state.searchReducer );
  
  const response= useSelector((state) => {
    let searcher = state.searchReducer

    console.log({state})
    
    if (entity.entity == 'users') {
      return state.userSearchReducer[entity.query] || {
        items: []
      }
    } else {
      return state.repoSearchReducer[entity.query] || {
        items: []
      }
    }
  });

  const {total_count} = response;  

  const fetchMoreData = () =>{
    console.log("called infinite")
    console.log({entity, response})
    dispatch(makeCall({...entity, page: ++response.page}));
  }
  console.log({response})


  console.log({entity});

    return (
        <StyledParentBody className="parentBody container" onType={onType}>
          <SearcherComponent/>
            {/* <div className="card-parent"> */}
              <InfiniteScroll
              dataLength={response.items.length}
              next={fetchMoreData}
              hasMore={!response.incomplete_results}
              loader={<MoonLoader/>}
              >
                { entity && response.items.map(item => entity.entity === "users" ? <UserCard bio={item} key={item.id} /> : <RepoCard item={item} key={item.id}/> )}
              </InfiniteScroll>


            {/* </div> */}
         
            
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
  /* height: 100%; */
  flex-direction: ${({onType})=> onType ? "row" : "column"};
  align-items: ${({onType})=> onType ? "flex-start" : "center"};
  justify-content: ${({onType})=> onType ? "flex-start" : "space-around"};
  /* height: ${({onType})=> onType ? "100%" : "100vh"}; */
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
