import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'Spaghetti', price:5, qty:0},
    {id: 2, name:'Gold', price:4, qty:0},
    {id: 3, name:'Rake', price:6, qty:0},
    {id: 4, name:'Car', price:7, qty:0},
    {id: 5, name:'Falcon', price:8, qty:0}
  ],
  cart: [1, 3, 1],
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    case 'REMOVE_PRODUCT_FROM_CART':
      return state.set('cart', state.get('cart').slice(1, index).concat(action.slice[index]))
    default:
      return state
  }
}
