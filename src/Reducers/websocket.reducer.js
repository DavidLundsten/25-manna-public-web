import {websocketConstants} from './Constants';

export function navbar(state = {fullwidth:true}, action) {

    switch (action.type) {
        case navbarConstants.HIDE_FULLWIDTH_BAR_REQUEST:
            return  {
                ...state,
            }
        default:
            return state;
    }
}
