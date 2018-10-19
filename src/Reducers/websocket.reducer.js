import { websocketConstants } from '../Constants';


export function websocket(state = {connection:null}, action) {

    switch (action.type) {
        case websocketConstants.CONNECTION_START_REQUEST:
            return  {
                ...state,
                loading:true
            }
        case websocketConstants.CONNECTION_START_ERROR:
            return  {
                ...state,
                loading:false
            }
        case websocketConstants.CONNECTION_START_SUCCESS:
            return  {
                ...state,
                loading:false,
            }
        case websocketConstants.SERVERCALL_REQUEST:
            return {
                ...state,
                waiting:true
            }
        case websocketConstants.SERVERCALL_SUCCESS:
            return {
                ...state,
                waiting:false
            }
        case websocketConstants.SERVERCALL_ERROR:
            return {
                ...state,
                waiting:false
            }
        default:
            return state;
    }
}
