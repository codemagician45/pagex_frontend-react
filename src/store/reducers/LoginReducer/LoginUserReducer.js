import {
    LOGIN_USER,
  } from "../../actions/ActionType";
  
  const initialState = {
    loginUser: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case LOGIN_USER:
            return {
                data: action.payload,
            };  
        
        default:
            return state;
    }
}