import axios from 'axios';

export const ADD_SMURF = "ADD_SMURF";
export const SMURF_FETCH = "SMURF_FETCH";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAIL = "SMURF_FAIL";

const addSmurf= (smurf) => {
    return (dispatch) => {

    }
}

const smurfFetch = () => {

}

const smurfSuccess = () => {

}

const smurfFail = (err) => {

}

export {
    addSmurf,
    smurfFail,
    smurfFetch,
    smurfSuccess
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.