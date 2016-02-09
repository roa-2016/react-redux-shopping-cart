import {fromJS, update} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', counter: 1},
    {id: 2, name:'gold', counter: 0},
    {id: 3, name:'rake', counter: 0},
    {id: 4, name:'car', counter: 1},
    {id: 5, name:'falcon', counter: 0}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      let product = state.get('products').filter((product) => product.get('id') === action.id).get('0')
      let counter = product.get('counter') + 1
      return state.set('cart', state.get('cart').push(action.id))
                  .setIn(['products', action.id-1, 'counter'], counter)
    default:
      return state
  }
}
