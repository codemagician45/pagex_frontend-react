import axios from "axios/index";
import {
    VALIDATE_CODE,
} from '../ActionType';

function codeValidate(data, dispatch) {

    axios.post(process.env.REACT_APP_API_URL + "/api/v1/users/validate/code",data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(results => {
            dispatch({
                type: VALIDATE_CODE,
                payload: results.data,
            })
        })
        .catch(err => {
            dispatch({
                type: VALIDATE_CODE,
                payload: false,
            })
        });
}

export function codeValidateAction(data) {

    return async function (dispatch) {
        await codeValidate(data, dispatch)
    }

};