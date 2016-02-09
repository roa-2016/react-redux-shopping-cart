import {fromJS, update} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', counter: 1, price: 5},
    {id: 2, name:'gold', counter: 0, price: 300},
    {id: 3, name:'rake', counter: 0, price: 220},
    {id: 4, name:'car', counter: 1, price: 330},
    {id: 5, name:'falcon', counter: 0, price: 33}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  let idx;
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      idx = state.get('products').findIndex((product) => product.get('id') === action.id)
      return state.set('cart', state.get('cart').push(action.id))
             .updateIn(['products', idx, 'counter'], (counter) => counter+1)
    case 'REMOVE_PRODUCT_FROM_CART': 
      idx = state.get('products').findIndex((product) => product.get('id') === action.id)
      if (state.getIn(['products', idx, 'counter']) === 0) return state
      let gt1Product = state.updateIn(['products', idx, 'counter'], (counter) => counter-1)
      let lte1Product = state.updateIn(['products', idx, 'counter'], (counter) => counter-1)
                         .set('cart', state.get('cart').delete(idx))
      return gt1Product.getIn(['products', idx, 'counter']) > 0 ? gt1Product : lte1Product
    default:
      return state
  }
}
