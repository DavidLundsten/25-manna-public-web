import { themeConstants } from '../Constants';

export function theme(state = { theme:'light'}, action) {

    switch (action.type) {
        case themeConstants.CHANGE_THEME_REQUEST:
            return {
                changing: true,
                ...state,
            }
        case themeConstants.CHANGE_THEME_SUCCESS:
            return {
                changing: false,
                theme: action.payload,
                ...state,
            }
        default:
            return state;
    }
}
