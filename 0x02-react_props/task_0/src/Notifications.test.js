import React from 'react';
import { shallow } from 'enzyme';
import {Notifications} from './Notifications';

describe('Notifications Component rendering tests', () => {
    it('renders <Notifications /> without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders three <li> items', () => {
        const wrapper = shallow(<Notifications />);
        const listItems = wrapper.find('ul li');
        expect(listItems).toHaveLength(3);
    });

    it('renders text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        const text = wrapper.find("p").text();
        expect(text).toContain('Here is the list of notifications');
    });
});