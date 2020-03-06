import {
    GET_ALL_PASSIONS,
  } from "../../actions/ActionType";
  
  const initialState = {
    passionsList: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case GET_ALL_PASSIONS:
            return {
                data: action.payload,
            };  
        
        default:
            return state;
    }
}