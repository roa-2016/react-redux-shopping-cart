import reducer from '../app/reducer'
import {expect} from 'chai'

describe('Reducer', () => {
  it('gets a default product list', () => {
    const state = reducer(undefined,{})
    expect(state.get('products').size).to.equal(5)
    expect(state.get('products').first().get('name')).to.equal('spaghetti')
  })
})
