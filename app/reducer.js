import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'Ford', price:'$30000', year:'2013'},
    {id: 2, name:'Peugot', price:'$20000', year:'2005'},
    {id: 3, name:'Honda', price:'$10000', year:'2008'},
    {id: 4, name:'Dugati', price:'$5000', year:'2011'},
    {id: 5, name:'falcon', price:'$50000', year:'2000'}
  ],
  cart: []
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    default:
      return state
  }
}
