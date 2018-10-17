import { navbarConstants } from '../Constants';

function hideFullwidthBar() {
    return dispatch => {
        dispatch(request());
        dispatch(success());
    }
    function request() { return { type: navbarConstants.HIDE_FULLWIDTH_BAR_REQUEST } }
    function success() { return { type: navbarConstants.HIDE_FULLWIDTH_BAR_SUCCESS } }
}

function showFullwidthBar() {
    return dispatch => {
        dispatch(request());
        dispatch(success());
    }
    function request() { return { type: navbarConstants.SHOW_FULLWIDTH_BAR_REQUEST } }
    function success() { return { type: navbarConstants.SHOW_FULLWIDTH_BAR_SUCCESS } }
}
function openDropdownMenu(event){
    return dispatch => {
        dispatch(request());
        dispatch(success());
    }
    function request() { return { type: navbarConstants.OPEN_DROPDOWN_MENU_REQUEST } }
    function success() { return { type: navbarConstants.OPEN_DROPDOWN_MENU_SUCCESS } }
}
function closeDropdownMenu(){
    return dispatch => {
        dispatch(request());
        dispatch(success());
    }
    function request() { return { type: navbarConstants.CLOSE_DROPDOWN_MENU_REQUEST } }
    function success() { return { type: navbarConstants.CLOSE_DROPDOWN_MENU_SUCCESS } }
}


export const navbarActions = {
    showFullwidthBar,
    hideFullwidthBar,
    openDropdownMenu,
    closeDropdownMenu
};
