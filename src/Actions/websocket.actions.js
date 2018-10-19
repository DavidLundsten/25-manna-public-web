import { websocketConstants, teamConstants } from '../Constants';
import {hub} from '../Helpers/websocket';
import {mockedTeamResultList} from "../Helpers";

function randomMockedPunch(){
    const items = mockedTeamResultList;
    return  items[Math.floor(Math.random()*items.length)];
}

function startConnection(hub) {
    return dispatch => {
        dispatch(request());
        dispatch(success())  
    }
    function request() { return { type: websocketConstants.CONNECTION_START_REQUEST } }
    function error() { return { type: websocketConstants.CONNECTION_START_ERROR } }
    function success() { return { type: websocketConstants.CONNECTION_START_SUCCESS } }
}

function serverCall() {
    return dispatch => {
        dispatch(request());
        dispatch(success());
    }
    function request() { return { type: websocketConstants.SERVERCALL_REQUEST} }
    function success(payload) { return { type: websocketConstants.SERVERCALL_SUCCESS, payload } }
    function error() { return { type: websocketConstants.SERVERCALL_ERROR } }
}

export const websocketActions = {
    startConnection,
    serverCall
};
