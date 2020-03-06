import {
    VERIFY_EMAIL,
  } from "../../actions/ActionType";
  
  const initialState = {
    accountVerifData: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case VERIFY_EMAIL:
            return {
                data: action.payload,
            };  
        
        default:
            return state;
    }
}