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


const ParentBody = () => {



  // console.log({ dat: configStore.store.getState() })
  const[onData, setOnData] = useState(false);


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

  useEffect(() => {
    if(!(response.items.length === 0 )){
      setOnData(true);
    }
   
  }, [response.items])

  // const { total_count } = response;

  // custom data to fetch more data
  const fetchMoreData = () => {
    console.log({entity})
    console.log({entity2: {...entity}})
    dispatch(makeCall({ ...entity, page: ++response.page }));
  }
  console.log({onData})

  console.log({ response })


  // console.log({ entity });

  return (
    <NewParentBody className="container">
          
    <StyledParentBody className="parentBody" onData={onData}>
     
     <SearcherComponent fetchDetails={entity} setFetchDetails={setEntity} onData={onData}/>

   </StyledParentBody>
   <InfiniteScroll
       dataLength={response.items.length}
       next={fetchMoreData}
       hasMore={true}
       loader={<MoonLoader />}
       className="scrollComponent"
     >
       <div className="card-parent">
         {entity && response.items.map(item => entity.entity === "users" ? <UserCard bio={item} key={item.id} /> : <RepoCard item={item} key={item.id} />)}
       </div>

     </InfiniteScroll>


    </NewParentBody>

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
  flex-direction: ${({ onData }) => onData ? "row" : "column"};
  align-items: ${({ onData }) => onData ? "flex-start" : "center"};
  justify-content: ${({ onData }) => onData ? "flex-start" : "space-around"};
  height: ${({ onData }) => onData ? "auto" : "100%"};
  position: relative;
  animation: ${({ onData }) => onData ? rotate : null} .5s linear;
  width: 100%;
  border: 1px solid yellow;

`;
const NewParentBody = styled.div`
  height: ${({ onData }) => onData ? "100%" : "100vh"};
  width: 100%;
  overflow-y: scroll;
  border: 1px white solid;
  .card-parent{
    display: grid;
    grid-gap: 3.5rem;
    /* grid-template-columns: repeat(auto-fit, minmax(27rem, 33rem)); */
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    justify-content: center;
    border: 1px red solid;
  }

  .infinite-scroll-component__outerdiv, .scrollComponent {
    width: 100%;
  }

`;



export default ParentBody
