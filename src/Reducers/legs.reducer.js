import { legsConstants } from '../Constants';
import { mocked_legs } from '../Helpers/mockedLegs';

export function legs(state = {legs: mocked_legs}, action) {

    switch (action.type) {
        case legsConstants.UPDATE_LEG_RESULTS_REQUEST:
            return {
                ...state,
                updating: true
            }
            break;
        case legsConstants.UPDATE_LEG_RESULTS_ERROR:
            return {
                ...state,
                updating:false
            }
            break;
        case legsConstants.UPDATE_LEG_RESULTS_SUCCESS:
            return {
                ...state,
                updating: false
            }
            break;
        default:
            return state;
    }
}
