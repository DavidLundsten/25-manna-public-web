import React from 'react';
import ReactDOM from 'react-dom';
import {footer, Footer} from '../Footer';
import { shallow } from 'enzyme';
import '../../setupTests'


describe('The Footer Component', ()=>{

    it ('should render shallowly without crashing', ()=>{
        shallow(<Footer/>)
    })
});