import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'Spaghetti'},
    {id: 2, name:'Gold'},
    {id: 3, name:'Rake'},
    {id: 4, name:'Car'},
    {id: 5, name:'Falcon'}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    case 'REMOVE_PRODUCT_FROM_CART':
      return state.set('cart', state.get('cart').delete(state.get('cart').indexOf(action.id)))
    default:
      return state
  }
}
