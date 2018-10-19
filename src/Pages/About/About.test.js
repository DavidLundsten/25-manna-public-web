import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../../setupTests'
import { About } from './About';


describe('The About Component', ()=>{

    it ('should render shallowly without crashing', ()=>{
        shallow(<About/>)
    })
});