import axios from 'axios';

export const ADD_SMURF = "ADD_SMURF";
export const SMURF_FETCH = "SMURF_FETCH";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAIL = "SMURF_FAIL";
export const TOGGLE_LOAD = "TOGGLE_LOAD";

const addSmurf= (smurf) => {
    return({type: ADD_SMURF, payload: smurf})
}

const smurfFetch = () => {
    return (dispatch) => {
        dispatch(toggleLoad() ); 
        axios.get("http://localhost:3333/smurfs")
            .then((resp) => {
                const list = resp.data;
                list.forEach((item) => { 
                    dispatch(addSmurf(item) )
                });
                dispatch(smurfSuccess() );
            }).catch((error) => dispatch(smurfFail(error) ));
    }
}

const smurfSuccess = () => {
    return({type: SMURF_SUCCESS})
}

const smurfFail = (err) => {
    return {type: SMURF_FAIL, payload: err}
}

const toggleLoad = () => {
    return {type: TOGGLE_LOAD}
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