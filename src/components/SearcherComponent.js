import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {  makeCall } from '../redux/action';
import useDebounce from '../utils/useDebounce';
import { ScaleLoader } from 'react-spinners';


const SearcherComponent = ({ fetchDetails, setFetchDetails, Data, setNotEmpty, notEmpty }) => {
    //custom dispatch hook
    const dispatch = useDispatch();

    const [timeCleaner, setTimeCleaner] = useState(null);
    const [load, setLoad] = useState(false);


    // Searching status whether there is pending API request)
    const [error, setError] = useState("");


    //custom function to clear data on error
    const clearData = (fetchDetails) => {
        const timer = setTimeout(() => {

            let data = { ...fetchDetails, query: "" }
            setError("")
            setFetchDetails(data);

        }, 2000);
        //cleanup
        return () => {
            clearTimeout(timer);
        }

    }


    //custom  handle change method for input and select component
    const handleChange = (e) => {

        timeCleaner && timeCleaner()
        let data = { ...fetchDetails, [e.target.name]: e.target.value, page: 1 }
        setFetchDetails(() => data)
        
        if (data.query.trim().length > 2) {
            setLoad(true);
            setError("");
        } else {
            setLoad(false);
            setNotEmpty(false);
        }
    }

    // Debounce search term so that it only gives us latest value ...
    const debouncedQuery = useDebounce(fetchDetails.query.trim(), 2000);

    let stateSelector = {
        users: 'userSearchReducer',
        repositories: 'repoSearchReducer'
    }
    let selector = stateSelector[fetchDetails.entity]
    const requestState = useSelector(state => state[selector][fetchDetails.query])


    //custom call to search github
    useEffect(() => {
        if ( (debouncedQuery.trim() && debouncedQuery.trim().length >= 3)) {
            if (requestState) {
                return setLoad(false);
            }
            setError("");
            dispatch(makeCall(fetchDetails)).then(() => {

                setLoad(false);
            });
        } else if(fetchDetails.query.length > 0 || debouncedQuery.length > 0 ){
            setNotEmpty(false)
            if(fetchDetails.query.trim().length === 0){
                setError("Input a search keyword");
            }
            else if((fetchDetails.query.trim().length  > 0 && fetchDetails.query.trim().length < 3)){
                setError("Search keyword must be more than 2 characters");
                const cancelCleanUp = clearData(fetchDetails);

                setTimeCleaner(()=>cancelCleanUp);

            }
        }
        // eslint-disable-next-line 
    }, [fetchDetails,debouncedQuery])

    return (
        <StyledSearcher Data={Data} notEmpty={notEmpty}>

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
                    {error && <span className="error">{error}</span>}

                </div>
                <div className="search-wrapper-select">
                    <label htmlFor="entity" className="search-label" >Select Entity</label>

                    <select name="entity" id="entity" onChange={handleChange} value={fetchDetails.entity}>
                        <option value="users">Users</option>
                        <option value="repositories">Repositories</option>
                    </select>
                </div>

            </div>
            {load && <ScaleLoader className="loader" color={"white"} />}

        </StyledSearcher>
    )
}
const StyledSearcher = styled.div`
    text-align: center;
    color: var(--textWhite);
    min-width: 55%;
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
    margin: ${({ notEmpty }) => notEmpty ? "0" : "auto"};
    margin-right: ${({ notEmpty }) => notEmpty ? "2rem" : "auto"};

}
.search-title-wrapper{
    display: ${({ notEmpty }) => notEmpty ? "flex" : "box"};
    margin-bottom: ${({ notEmpty }) => notEmpty ? "1rem" : "3rem"};
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
  margin-bottom: 2rem;

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
    margin-bottom: 5px;
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
.error{
  color: #ff7b72;
  font-size: 13px;
  display: flex;
  margin-left: 0.4rem;
  text-align: left;
  margin-bottom: 2rem;
}
@media screen and (max-width: 450px) {
    width: 100%;

    .search-wrapper{
       flex-direction: column;
    }
}


`;
export default SearcherComponent
