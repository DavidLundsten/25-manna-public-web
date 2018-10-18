import { websocketConstants } from '../Constants';
import {hub} from '../Helpers/websocket';

function randomMockedPunch(){
    const items = [1,2,3,4,5,6,7,8,9,10]
    return  items[Math.floor(Math.random()*items.length)];
}

function startConnection(hub) {
    return dispatch => {
        dispatch(request());
        dispatch(success())  
    }
    function request() { return { type: websocketActions.CONNECTION_START_REQUEST } }
    function error() { return { type: websocketActions.CONNECTION_START_ERROR } }
    function success() { return { type: websocketActions.CONNECTION_START_SUCCESS } }
}

function serverCall() {
    return dispatch => {
        dispatch(request());
        dispatch(success(randomMockedPunch()));
    }
    function request() { return { type: websocketActions.SERVERCALL_REQUEST} }
    function success(payload) { return { type: websocketActions.SERVERCALL_SUCCESS, payload } }
    function error() { return { type: websocketActions.SERVERCALL_ERROR } }
}

export const websocketActions = {
    startConnection,
    serverCall
};
