import {
    VALIDATE_CODE,
  } from "../../actions/ActionType";
  
  const initialState = {
    codeIsValid: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case VALIDATE_CODE:
            return {
                data: action.payload,
            };  
        
        default:
            return state;
    }
}