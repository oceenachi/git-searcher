import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import styled, { keyframes } from 'styled-components'
import RepoCard from './RepoCard'
import SearcherComponent from './SearcherComponent'
import UserCard from './UserCard';
import { useDispatch } from "react-redux";
import configStore from "../redux/configureStore";
import InfiniteScroll from 'react-infinite-scroll-component';
import { MoonLoader } from 'react-spinners';
import { makeCall } from '../redux/action';


const ParentBody = ({ onType }) => {



  // console.log({ dat: configStore.store.getState() })


  //use dispatch hook
  const dispatch = useDispatch();



  // Get entity param from redux store
  const [entity, setEntity] = useState({query: '', entity: 'users'});



  // Get entity param from redux store
  const response = useSelector((state) => {
    // let searcher = state.searchReducer

    // console.log({ state })

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

  // const { total_count } = response;

  // custom data to fetch more data
  const fetchMoreData = () => {
    console.log({entity})
    console.log({entity2: {...entity}})
    dispatch(makeCall({ ...entity, page: ++response.page }));
  }

  // console.log({ response })


  // console.log({ entity });

  return (
    <StyledParentBody className="parentBody container" onType={onType}>
      <SearcherComponent fetchDetails={entity} setFetchDetails={setEntity}/>

      <InfiniteScroll
        dataLength={response.items.length}
        next={fetchMoreData}
        hasMore={!response.incomplete_results}
        loader={<MoonLoader />}
        className="scrollComponent"
      >
        <div className="card-parent">
          {entity && response.items.map(item => entity.entity === "users" ? <UserCard bio={item} key={item.id} /> : <RepoCard item={item} key={item.id} />)}
        </div>

      </InfiniteScroll>




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
  flex-direction: ${({ onType }) => onType ? "row" : "column"};
  align-items: ${({ onType }) => onType ? "flex-start" : "center"};
  justify-content: ${({ onType }) => onType ? "flex-start" : "space-around"};
  position: relative;
  animation: ${({ onType }) => onType ? rotate : null} 2s linear;
  width: 100%;
  overflow-y: scroll;
  border: 1px white solid;

  .infinite-scroll-component__outerdiv, .scrollComponent {
    width: 100%;
  }

  .card-parent{
    display: grid;
    grid-gap: 3.5rem;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 33rem));
    width: 100%;
    justify-content: center;
  }
 


`;


export default ParentBody
