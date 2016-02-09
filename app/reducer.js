import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, price: '$4.00', name:'spaghetti'},
    {id: 2, price: '$4.00', name:'gold'},
    {id: 3, price: '$20.00', name:'rake'},
    {id: 4, price: '$4000.00', name:'car'},
    {id: 5, price: '$4.00', name:'falcon'}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    default:
      return state
  }
}
