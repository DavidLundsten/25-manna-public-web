import { navbarConstants } from '../Constants';

export function navbar(state = {fullwidth:true}, action) {

    switch (action.type) {
        case navbarConstants.HIDE_FULLWIDTH_BAR_REQUEST:
            return  {
                ...state,
            }
        case navbarConstants.HIDE_FULLWIDTH_BAR_SUCCESS:
            return  {
                ...state,
                fullwidth:false
            }
        case navbarConstants.SHOW_FULLWIDTH_BAR_REQUEST:
            return  {
                ...state
            }
        case navbarConstants.SHOW_FULLWIDTH_BAR_SUCCESS:
            return  {
                ...state,
                fullwidth:true
            }
        case navbarConstants.CLOSE_DROPDOWN_MENU_REQUEST:
            return {
                ...state
            }
        case navbarConstants.CLOSE_DROPDOWN_MENU_SUCCESS:
            return {
                ...state,
                dropdownMenu: false
            }
        case navbarConstants.OPEN_DROPDOWN_MENU_REQUEST:
            return {
                ...state
            }
        case navbarConstants.OPEN_DROPDOWN_MENU_SUCCESS:
            return {
                ...state,
                dropdownMenu: true
            }
        default:
            return state;
    }
}
