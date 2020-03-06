import {
    GET_DATA,
} from '../ActionType';

export function getData() {
    let data = {
        id: 1,
        username: "John Doe",
        age: "42",
        position: "Software engineer"
    };

    return function (dispatch) {
        dispatch({
            type: GET_DATA,
            payload: data
        })

    }
}