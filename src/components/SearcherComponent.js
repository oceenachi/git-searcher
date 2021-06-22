import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { changeParams, makeCall } from '../redux/action';

const SearcherComponent = () => {
    const dispatch = useDispatch();

    const [fetchDetails, setFetchDetails] = useState({query: '', entity: 'users'})

    // console.log({props})


    //custom  handle change method for input and select component
    const handleChange = (e) => {
        setFetchDetails({...fetchDetails, [e.target.name]: e.target.value,page:1})
    }

    //custom hook to search github
    useEffect(()=>{
        if(fetchDetails.query.length > 3) {
            dispatch(makeCall(fetchDetails));
        }
        dispatch(changeParams(fetchDetails));
    },[fetchDetails])

    return (
        <StyledSearcher>
            <div className="search-title-wrapper">
                <img src="./images/black-github.png" alt="github logo" className="logo" />
                <div>
                <h1 className="form-header">GitHub Searcher</h1>
                <p className="form-sub-title">Search users or repositories below</p>

                </div>
              
            </div>
            <div className="search-wrapper">
                <div className="search-wrapper-input">
                    <label htmlFor="query" className="search-label" >Enter Query or Keywords</label>
                    <input type="text" name="query" id="query" value={fetchDetails.query} className="search" placeholder="Start typing to search ..." onChange={handleChange} />

                </div>
                <div className="search-wrapper-select">
                    <label htmlFor="entity" className="search-label" >Select Entity</label>

                    <select name="entity" id="entity" onChange={handleChange} value={fetchDetails.entity}>
                        <option value="users">Users</option>
                        <option value="repositories">Repositories</option>
                    </select>
                </div>

            </div>


        </StyledSearcher>
    )
}
const StyledSearcher = styled.div`
    text-align: center;
    color: var(--textWhite);
    min-width: 45%;
    margin-bottom: 5rem;


.form-header {
    font-size: 2.4rem;
    font-weight: 300;
    letter-spacing: -.5px;
    margin: 15px 0 5px 0;
}
.form-sub-title{
    font-size: 1.6rem;
    letter-spacing: 0;
}
.logo{
    display: block;
    margin: auto;
}
.search-title-wrapper{
    margin-bottom: 3rem;
}
.search-wrapper{
  background-color: #161b22;
  border: 1px solid #21262d;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-shadow: rgb(35 33 41 / 56%) 0px 2px 10px 3px;

}
.search-wrapper-input{
    flex-basis: 65%;
}
.search-wrapper-select{
    flex-basis: 25%;
}
input:focus, select:focus{
    background: #c9d1d9 !important;
    color: black !important;
}

.search-wrapper input, select{
    margin-top: 5px;
    margin-bottom: 15px;
    display: block;
    width: 100%;
    padding: 10px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #c9d1d9;
    background-color: #0d1117;
    border: 1px solid #21262d;
    border-radius: 6px;
    outline: none;
}

.search-label{
  font-size: 14px;
  display: block;
  margin-bottom: 7px;
  font-weight: 400;
  text-align: left;
}
/* .error-section{
  color: #ff7b72;
  padding: 15px 20px;
  margin: 0 auto 10px;
  font-size: 13px;
  border-style: solid;
  border-color: rgb(248 81 73 / 40%);
  border-width: 1px;
  border-radius: 6px;
  background-image: linear-gradient(rgb(248 81 73 / 10%),rgb(248 81 73 / 10%));
} */



`;
export default SearcherComponent
