import {REPOSUCCESS} from "./types";

export const repoFetch = (data) => { 
    return {
        type: REPOSUCCESS,
        payload: data

    }
}