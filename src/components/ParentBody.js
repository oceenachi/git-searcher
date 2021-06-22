import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import styled, { keyframes } from 'styled-components'
import RepoCard from './RepoCard'
import SearcherComponent from './SearcherComponent'
import UserCard from './UserCard';
import { useDispatch } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { MoonLoader } from 'react-spinners';
import { makeCall } from '../redux/action';
import { toast } from 'react-toastify';


const ParentBody = () => {

  const [onData, setOnData] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const queryState = useSelector(state => state.searchReducer);

  // Extract a piece of the redux store
  const errorState = useSelector(state => state.errorReducer.error);


  //use dispatch hook
  const dispatch = useDispatch();



  // manually set entity param state
  const [entity, setEntity] = useState({ query: '', entity: 'users' });



  // Get entity param from redux store
  const response = useSelector((state) => {

    if (entity.entity === 'users') {
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
    if (!(response.items.length === 0)) {
      setOnData(true);
    }

  }, [response.items])

  useEffect(() => {
    if (queryState.query >= 3) {
      setIsEmpty(true);
    }

  }, [response.items])

  // custom data to fetch more data
  const fetchMoreData = () => {
    dispatch(makeCall({ ...entity, page: ++response.page }));
  }

  return (
    <NewParentBody className="container" isEmpty={isEmpty} onData={onData}>

      <StyledParentBody className="parentBody"  isEmpty={isEmpty} onData={onData}>

        <SearcherComponent fetchDetails={entity} setFetchDetails={setEntity}  isEmpty={isEmpty} onData={onData} />

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
      {errorState.error && toast.error(errorState.message)}


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
  /* flex-direction: ${({ onData }) => onData ? "row" : "column"};
  align-items: ${({ onData }) => onData ? "flex-start" : "center"};
  justify-content: ${({ onData }) => onData ? "flex-start" : "center"};
  height: ${({ onData }) => onData ? "auto" : "100%"};
  position: relative;
  animation: ${({ onData }) => onData ? rotate : null} .5s linear; */
  flex-direction: ${({ isEmpty }) => isEmpty ? "row" : "column"};
  align-items: ${({ isEmpty }) => isEmpty ? "flex-start" : "center"};
  justify-content: ${({ isEmpty }) => isEmpty ? "flex-start" : "center"};
  height: ${({ isEmpty }) => isEmpty ? "auto" : "100%"};
  position: relative;
  animation: ${({ isEmpty }) => isEmpty ? rotate : null} .5s linear;
  width: 100%;

`;
const NewParentBody = styled.div`
  height: ${({ isEmpty }) => isEmpty ? "100%" : "100vh"};
  width: 100%;
  overflow-y: scroll;
  .card-parent{
    display: grid;
    grid-gap: 3.5rem;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    width: 100%;
    justify-content: flex-start;
  }

  .infinite-scroll-component__outerdiv, .scrollComponent {
    width: 100%;
  }
  @media screen and (max-width: 1016px) {

    .card-parent{
      grid-template-columns: repeat(auto-fit, minmax(24.5rem, 1fr));
      justify-content: center;
    }
}

`;
export default ParentBody
