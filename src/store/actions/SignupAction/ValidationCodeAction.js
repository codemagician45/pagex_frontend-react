import axios from "axios/index";
import {
    VERIFY_EMAIL,
} from '../ActionType';

function emailVeriffication(data, dispatch) {

    axios.post(process.env.REACT_APP_API_URL + "/api/v1/users/validate/account", data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(results => {
            dispatch({
                type: VERIFY_EMAIL,
                payload: results,
            })
        })
        .catch(err => {
            dispatch({
                type: VERIFY_EMAIL,
                payload: err,
            })
        });
}

export function emailVerifficationAction(data) {
    return async function (dispatch) {
        await emailVeriffication(data, dispatch)
    }

};