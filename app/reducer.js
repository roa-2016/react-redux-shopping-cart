import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price: 3},
    {id: 2, name:'gold', price: 250},
    {id: 3, name:'rake', price: 12},
    {id: 4, name:'car', price: 20000},
    {id: 5, name:'falcon', price: 1070}
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
    case 'REMOVE_PRODUCT_FROM_CART':
      return state.set('cart', state.get('cart').delete(state.get('cart').indexOf(action.id)))
    case 'REMOVE_PRODUCT_FROM_WISHLIST':
      return state.set('wishlist', state.get('wishlist').delete(state.get('wishlist').indexOf(action.id)))
    default:
      return state
  }
}
