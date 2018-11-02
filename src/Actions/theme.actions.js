import { themeConstants } from '../Constants';

function toggleTheme(payload) {
    return dispatch => {
        dispatch(request());
        dispatch(success(payload));
    }
    function request() { return { type: themeConstants.TOGGLE_THEME_REQUEST } }
    function success() { return { type: themeConstants.TOGGLE_THEME_SUCCESS, payload } }
}

export const themeActions = {
    toggleTheme
};