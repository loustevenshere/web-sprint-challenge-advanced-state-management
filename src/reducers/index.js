import {SMURF_CALL_START, SMURF_CALL_END, SMURF_CALL_SUCCESS, SMURF_CALL_FAIL } from './../actions'
export const initialState = {
    name: '',
    position: '',
    nickname: '',
    description: '',
    id: '',
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case(SMURF_CALL_START):
        return({
            ...state,
            isLoading: true
        });
        case(SMURF_CALL_END):
        return({
            ...state,
            isLoading: false
        });
        case(SMURF_CALL_SUCCESS):
        return({
            ...state,
            name: action.payload,
            position: action.payload,
            nickname: action.payload,
            description: action.payload,
            isLoading: false
        });
        case(SMURF_CALL_FAIL):
        return({
            ...state,
            error: action.payload,
            isLoading: false
        });
        // case(SMURF_POST_SUCCESS):
        // return({
        //     ...state,
        //     name: action.payload,
        //     position: action.payload,
        //     nickname: action.payload,
        //     description: action.payload,
        //     isLoading: false
        // });
        // case(SMURF_POST_FAIL):
        // return({
        //     ...state,
        //     error: action.payload,
        //     isLoading: false
        // });

        // case('SMURF_POST_FAIL'):

        default:
            return state

    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary