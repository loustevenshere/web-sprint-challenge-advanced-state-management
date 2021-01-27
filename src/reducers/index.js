import {SMURF_CALL_START, SMURF_CALL_END, SMURF_CALL_SUCCESS, SMURF_CALL_FAIL, SMURF_POST_SUCCESS } from './../actions'

export const initialState = {
    smurfs : [
        {
            id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
            name:'Poppa Smurf',
            position:'Village Leader',
            nickname: 'Pops',
            description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
          }
    ],
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
            smurfs: action.payload
        });
        case(SMURF_CALL_FAIL):
        return({
            ...state,
            error: action.payload,
            isLoading: false
        });
        case(SMURF_POST_SUCCESS):
            // const newSmurf = {
            //     name:action.payload.name,
            //     position:action.payload.po,
            //     nickname:action.payload,
            //     description:action.payload
            // };
        return({
            ...state,
            smurfs: [...state.smurfs, action.payload]
        });
        // case(SMURF_POST_FAIL):
        // return({
        //     ...state,
        //     error: action.payload,
        //     isLoading: false
        // });


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