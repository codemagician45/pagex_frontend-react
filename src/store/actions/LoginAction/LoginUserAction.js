import axios from "axios/index";
import {
    LOGIN_USER,
} from '../ActionType';

function loginUser(data, dispatch) {

    axios.post(process.env.REACT_APP_API_URL + "/api/v1/users/login",data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(results => {
            if (results.data !== undefined) {
                if (results.data.code === 200) {
                    localStorage.setItem('token', results.data.data.token);
                    localStorage.setItem('userInfo', results.data.data);
                }
            }
            dispatch({
                type: LOGIN_USER,
                payload: results.data,
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_USER,
                payload: false,
            })
        });
}

export function loginUserAction(data) {

    return async function (dispatch) {
        await loginUser(data, dispatch)
    }

};