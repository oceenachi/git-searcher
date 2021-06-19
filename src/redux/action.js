import { apiGet } from "../utils/apiHelpers";
import * as types from "./types";


export const callSuccess = (payload) => ({
    type: types.CALL_SUCCESS,
    payload,
})

 //make call to the api
export const makeCall = (queries) => async (dispatch) => {

    const {response} = await apiGet(`https://api.github.com/search/repositories?q=todo`);

      if (response.status === 200) {
          dispatch(callSuccess(response.data))
      }
console.log(response.data)



}