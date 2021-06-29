import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import styled, { keyframes } from 'styled-components'
import RepoCard from './RepoCard'
import SearcherComponent from './SearcherComponent'
import UserCard from './UserCard';
import { useDispatch } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { MoonLoader } from 'react-spinners';
import { error, makeCall } from '../redux/action';
import { toast } from 'react-toastify';


const ParentBody = () => {

  const [onData, setOnData] = useState(false);
  const [notEmpty, setNotEmpty] = useState(false);

  // manually set entity param state
  const [entity, setEntity] = useState({ query: '', entity: 'users' });

  //use dispatch hook
  const dispatch = useDispatch();

  // Extract a piece of the redux store
  const errorState = useSelector(state => state.errorReducer);

  useEffect(() => {
 
    if(errorState.error){
      toast.error(errorState.message);
    }
    dispatch(error({message: "", error: false}))
    // eslint-disable-next-line
  }, [errorState.error, errorState.message])


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

  //custom hook to set data on response
  useEffect(() => {
    if (!(response.items.length === 0)) {
      setOnData(true);
    }
  }, [response.items]);

  useEffect(() => {
    if (entity.query.trim().length >= 3) {
      setNotEmpty(true);
    }

  }, [entity.query]);


  // custom function to fetch more data
  const fetchMoreData = () => {
    dispatch(makeCall({ ...entity, page: ++response.page }));
  }

  return (
    <NewParentBody className="container" notEmpty={notEmpty} Data={onData}>

      <StyledParentBody className="parentBody"  notEmpty={notEmpty} Data={onData}>

        <SearcherComponent fetchDetails={entity} setFetchDetails={setEntity} setNotEmpty={setNotEmpty} notEmpty={notEmpty} Data={onData} />

      </StyledParentBody>
      <InfiniteScroll
        dataLength={response.items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<MoonLoader />}
        className="scrollComponent"
      >
        <div className="card-parent">
          {(entity.query.length > 2) && response.items.map(item => entity.entity === "users" ? <UserCard bio={item} key={item.id} /> : <RepoCard item={item} key={item.id} />)}
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

}`;

const StyledParentBody = styled.div`
  display: flex;
  flex-direction: ${({ notEmpty }) => notEmpty ? "row" : "column"};
  align-items: ${({ notEmpty }) => notEmpty ? "flex-start" : "center"};
  justify-content: ${({ notEmpty }) => notEmpty ? "flex-start" : "center"};
  height: ${({ notEmpty }) => notEmpty ? "auto" : "100%"};
  position: relative;
  animation: ${({ notEmpty }) => notEmpty ? rotate : null} .5s linear;
  width: 100%;

`;
const NewParentBody = styled.div`
  height: ${({ notEmpty }) => notEmpty ? "100%" : "100vh"};
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
