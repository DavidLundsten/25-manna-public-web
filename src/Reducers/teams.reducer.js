import {teamConstants} from '../Constants';

export function teams(state = {}, action) {

    switch (action.type) {
        case teamConstants.ADD_FAVOURITE_REQUEST:
            return {
                ...state,
            }
        default:
            return state;
    }
}
