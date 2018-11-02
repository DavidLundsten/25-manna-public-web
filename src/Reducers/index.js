import { combineReducers } from 'redux';
import { navbar } from './navbar.reducer';
import { teams } from './teams.reducer';
import { legs } from './legs.reducer';
import { websocket } from './websocket.reducer';
import { theme } from './theme.reducer';
import { menus } from './menus.reducer';
 

export default combineReducers({
    navbar,
    teams,
    legs,
    websocket,
    theme,
    menus,
});