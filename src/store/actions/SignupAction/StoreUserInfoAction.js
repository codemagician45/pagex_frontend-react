import axios from "axios/index";
import {
    STORE_INFO,
} from '../ActionType';

export function userRegisterInfoAction(data) {

    return async function (dispatch) {
        dispatch({
            type: STORE_INFO,
            payload: data,
        })
    }
};