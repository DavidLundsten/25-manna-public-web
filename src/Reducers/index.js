import { combineReducers } from 'redux';
import { navbar } from './navbar.reducer';
import { teams } from './teams.reducer';
import { legs } from './legs.reducer';
import {websocket} from './websocket.reducer';


export default combineReducers({
    navbar,
    teams,
    legs,
    websocket
});