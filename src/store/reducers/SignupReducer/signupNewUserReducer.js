import {
    SIGNUP_USER,
  } from "../../actions/ActionType";
  
  const initialState = {
    signedUpUser: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case SIGNUP_USER:
            return {
                data: action.payload,
            };  
        
        default:
            return state;
    }
}