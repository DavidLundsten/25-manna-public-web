import { menusConstants } from '../Constants';
import {menus} from '../Helpers/menus'

function getMenus(payload) {
    return dispatch => {

        dispatch(request());
        dispatch(success(menus));
    }
    function request() { return { type: menusConstants.GET_MENUS_REQUEST } }
    function success(payload) { return { type: menusConstants.GET_MENUS_SUCCESS, payload } }
}

export const menusActions = {
    getMenus
};

