import axios from "axios/index";
import {
    GET_ALL_PASSIONS,
} from '../ActionType';

function getAllPassions(page, limit, dispatch) {

    axios.get(process.env.REACT_APP_API_URL + `/api/v1/passion/all/limit/${limit}/page/${page}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(results => {
            dispatch({
                type: GET_ALL_PASSIONS,
                payload: results.data,
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_PASSIONS,
                payload: false,
            })
        });
}

export function getAllPassionsAction(page, limit) {

    return async function (dispatch) {
        await getAllPassions(page, limit, dispatch)
    }

};