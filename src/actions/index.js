import axios from 'axios';

export const SMURF_CALL_START = 'SMURF_CALL_START';
export const SMURF_CALL_END = 'SMURF_CALL_END';
export const SMURF_CALL_SUCCESS = 'SMURF_CALL_SUCCESS';
export const SMURF_CALL_FAIL = 'SMURF_CALL_FAIL';
export const SMURF_POST_SUCCESS = 'SMURF_POST_SUCCESS'

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.

export const getSmurfs = () => dispatch => {
    dispatch({ type: SMURF_CALL_START});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: SMURF_CALL_SUCCESS, payload: res.data})
            // console.log(res.data)
        })
        .catch(err => {
            dispatch({ type: SMURF_CALL_FAIL, payload: err})
            // console.log(err)
        })
}

// Make smurf post variables, #3?

export const postSmurfs = (smurf) => dispatch => {
    dispatch({type: SMURF_CALL_START});
    axios
        .post('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: SMURF_POST_SUCCESS, payload: smurf})
            console.log(res)
        })
        .catch(err => {
            dispatch({ type: SMURF_CALL_FAIL, payload: err})
            console.log(err)
        })
    };


