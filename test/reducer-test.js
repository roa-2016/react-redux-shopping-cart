import reducer from '../app/reducer'
import {expect} from 'chai'

describe('Reducer', () => {
  describe('initial state', () => {
    it('has a default product list', () => {
      const state = reducer(undefined,{})
      expect(state.get('products').size).to.equal(5)
      expect(state.get('products').first().get('name')).to.equal('spaghetti')
    })
    it('has a cart with two items', () => {
      const state = reducer(undefined, {})
      expect(state.get('cart').size).to.equal(2)
    })
  })
  describe('cart', () => {
    it('adds a product to the shopping cart', () => {
      const state = reducer(undefined, {
        type: 'ADD_PRODUCT_TO_CART', 
        id: 3
      })
      expect(state.get('cart').size).to.equal(3)
      expect(state.get('cart')).to.include(3)
    })
     it('adds a product to the shopping cart and adds a tally ', () => {
      const id = 3
      const state = reducer(undefined, {
        type: 'ADD_PRODUCT_TO_CART', 
        id: id
      })
      const nextState = reducer(state, {
        type: 'ADD_PRODUCT_TO_CART', 
        id: id
      })
      expect(state.getIn(['products', id-1, 'counter'])).to.equal(1)
      expect(nextState.getIn(['products', id-1, 'counter'])).to.equal(2)
    })
    it('removes a product if there are multiple products ', () => {
      const id = 3
      const state = reducer(undefined, {
        type: 'ADD_PRODUCT_TO_CART', 
        id: id
      })
      const nextState = reducer(state, {
        type: 'REMOVE_PRODUCT_FROM_CART', 
        id: id
      })
      expect(state.getIn(['products', id-1, 'counter'])).to.equal(1)
      expect(nextState.getIn(['products', id-1, 'counter'])).to.equal(0)
    })
    it('removes a product if there are no multiple and removes it from the cart ', () => {
      const id = 1
      const state = reducer(undefined, {
        type: 'REMOVE_PRODUCT_FROM_CART', 
        id: id
      })
      expect(state.get('cart').size).to.equal(1)
      expect(state.get('cart')).to.not.include(1)
    })
  })
})
