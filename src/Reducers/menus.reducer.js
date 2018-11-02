import { menusConstants } from '../Constants';

export function menus(state = {}, action) {
    switch (action.type) {
        case menusConstants.GET_MENUS_REQUEST:
            return {
                ...state,
            }
        case menusConstants.GET_MENUS_SUCCESS:
            return {
                menus: action.payload,
                ...state,
            }
        default:
            return state;
    }
}
