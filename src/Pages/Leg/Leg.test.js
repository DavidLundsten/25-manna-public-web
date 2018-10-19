import React from 'react';
import ReactDOM from 'react-dom';
import {Leg} from './Leg';
import '../../setupTests'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Leg/>)
});
