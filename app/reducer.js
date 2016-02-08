import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price: 10},
    {id: 2, name:'gold', price: 50},
    {id: 3, name:'rake', price: 20},
    {id: 4, name:'car', price: 5},
    {id: 5, name:'falcon', price: 9999}
  ],
  cart: [],
  wishlist: [],
  subtotal: 0
})

function removeItemFromCart (state, id) {
  console.log(state.cart.findIndex(i => {
    i === id
  }))
  return state
}

function addItemToCart(state, id) {
  const price = state.get('products').filter(p => { return p.get('id') === id}).first().get('price')
  return state.set('cart', state.get('cart').push(id)).set('subtotal',
    state.get('subtotal') + price
  )
}


export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return addItemToCart(state, action.id)
    case 'REMOVE_PRODUCT_FROM_CART':
      return removeItemToCart(state, action.id)
    case 'ADD_PRODUCT_TO_WISHLIST':
      return state.set('wishlist', state.get('wishlist').push(action.id))
  }
  return state
}
