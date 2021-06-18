import React from 'react'
import styled from 'styled-components'

const SearcherComponent = () => {
    return (
        <StyledSearcher>
            <div className="search-title">
                <img src="./images/black-github.png" alt="github logo" className="logo" />
                <h1 className="form-header">GitHub Searcher</h1>
                <p className="form-sub-title">Search users or repositories below</p>
            </div>
            <div className="search-wrapper">
                <div className="search-wrapper-input">
                    <label for="username" class="search-label" >Enter Keywords or text</label>
                    <input type="text" name="" id="username" class="search" placeholder="Start typing to search ..." />

                </div>
                <div className="search-wrapper-select">
                    <label for="username" class="search-label" >Select Entity</label>

                    <select name="entity" id="entity">
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
    min-width: 50%;


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
.search-title{
    margin-bottom: 5rem;
}
.search-wrapper{
    background-color: #161b22;
  border: 1px solid #21262d;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}
.search-wrapper-input{
    flex: 3;

}
.search-wrapper-select{
    flex: 1;

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
