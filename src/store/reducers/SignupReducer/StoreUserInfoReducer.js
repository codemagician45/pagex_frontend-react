import {
    STORE_INFO,
  } from "../../actions/ActionType";
  
  const initialState = {
    userRegisterInfo: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case STORE_INFO:
            return {
                data: action.payload,
            };  
        
        default:
            return state;
    }
}