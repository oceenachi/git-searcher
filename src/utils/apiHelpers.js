import axios from "axios";


axios.interceptors.response.use(handleSuccess, handleError

);

function handleError(err){

    if(err.response.status >= 400){
        console.log({err})
        alert(err);
        
        return {error:true, data:err};
    }
}

function handleSuccess(response){
    console.log(response);

    return {response};

}

//custom api helper to make http requests
export const apiGet= (path)=>{
 
    const config = {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        },
      };
    // return axios.get(`${process.env.REACT_APP_BASE_URL}${path}`, config);
    return axios.get(path, config);
}