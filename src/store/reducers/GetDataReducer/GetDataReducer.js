import {
    GET_DATA,
  } from "../../actions/ActionType";
  
  const initialState = {
    getData: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case GET_DATA:
            return {
                data: action.payload,
            };  
        
        default:
            return state;
    }
}