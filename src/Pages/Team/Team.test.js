import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../../setupTests'
import { Team } from './Team';


describe('The Team Component', ()=>{

    it ('should render shallowly without crashing', ()=>{
        shallow(<Team/>)
    })
});