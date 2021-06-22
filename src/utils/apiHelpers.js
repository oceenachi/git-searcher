import axios from "axios";
import { toast } from "react-toastify";


// intercept api response and implement error handling
axios.interceptors.response.use(handleSuccess, handleError);

function handleError(err){

    if(err.response.status >= 400){
        // console.log({err})
        toast.error(err);
        
        return {error:true, data:err};
    }
}

function handleSuccess(response){
    // console.log(response);

    return {response};

}

//custom api helper to make http requests
export const apiGet= (path)=>{
 
    const config = {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: 'token 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'
        },
      };
    return axios.get(path, config);
}