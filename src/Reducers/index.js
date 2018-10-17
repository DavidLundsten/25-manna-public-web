import { combineReducers } from 'redux';
import { navbar } from './navbar.reducer';
import { teams } from './teams.reducer';


export default combineReducers({
    navbar,
    teams
});