import axios from "axios";


// intercept api response and implement error handling
axios.interceptors.response.use(handleSuccess, handleError);

function handleError(err){

    if(err.status >= 400){
        
        return {error:true, data:err};
    }
}


function handleSuccess(response){

    return {response};

}

//custom api helper to make http requests
export const apiGet= (path)=>{
 
    // add token generared from github as Authorization
    const config = {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
        },
      };
    return axios.get(path, config);
}