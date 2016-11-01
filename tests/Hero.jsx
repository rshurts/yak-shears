import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Hero from '../app/components/Hero';

describe('Hero', () => {
  const wrapper = shallow(<Hero title={'Title'} subtitle={'Subtitle'} />);

  it('should have a title', () => {
    expect(wrapper.containsMatchingElement(<h1>Title</h1>)).to.equal(true);
  });

  it('should have a subtitle', () => {
    expect(wrapper.containsMatchingElement(<h2>Subtitle</h2>)).to.equal(true);
  });
});
