import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import App from '../../components/app.jsx'

describe('<App />', () => {
  it('says hello world', () => {
    const wrapper = shallow(<App />) 
    expect(wrapper.contains('Hello World')).to.equal(true)
  })
})
