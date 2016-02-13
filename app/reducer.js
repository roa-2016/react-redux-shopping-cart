import {fromJS} from 'immutable'
import {URL_DID_CHANGE, ADD_PRODUCT_TO_CART} from './actions'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti'},
    {id: 2, name:'gold'},
    {id: 3, name:'rake'},
    {id: 4, name:'car'},
    {id: 5, name:'falcon'}
  ],
  cart: [1,4],
  url: '/'
})

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case URL_DID_CHANGE:
      return state.set('url', action.payload)
    case ADD_PRODUCT_TO_CART:
      return state.set('cart', state.get('cart').push(action.payload.id))
    default:
      return state
  }
}

module.exports = reducer
