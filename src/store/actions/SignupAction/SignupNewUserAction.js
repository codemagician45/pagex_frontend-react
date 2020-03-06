import axios from "axios/index";
import {
    SIGNUP_USER,
} from '../ActionType';

function signupNewUser(data, dispatch) {

    axios.post(process.env.REACT_APP_API_URL + "/api/v1/users/signup", data)
        .then(results => {
            dispatch({
                type: SIGNUP_USER,
                payload: results,
            })
        })
        .catch(err => {
            dispatch({
                type: SIGNUP_USER,
                payload: err,
            })
        });
}

export function signupNewUserAction(data) {
    return async function (dispatch) {
        const dataHttp = new FormData()
       
        dataHttp.append('password', data.password);
        dataHttp.append('id', data.id);
        dataHttp.append('validationCode', data.validationCode);
        dataHttp.append('fullname', data.fullname);
        dataHttp.append('email', data.email);
        dataHttp.append('passion', data.passion);

        if (data.photo !== "")
            await dataHttp.append('file', data.photo, data.photo.name)

        await signupNewUser(dataHttp, dispatch)
    }

};