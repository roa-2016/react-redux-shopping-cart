import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price: 10},
    {id: 2, name:'gold', price: 50},
    {id: 3, name:'rake', price: 20},
    {id: 4, name:'car', price: 5},
    {id: 5, name:'falcon', price: 9999}
  ],
  cart: [1,4],
  wishlist: []
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    case 'ADD_PRODUCT_TO_WISHLIST':
      return state.set('wishlist', state.get('wishlist').push(action.id))
    default:
      return state
  }
}
