import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti'},
    {id: 2, name:'gold'},
    {id: 3, name:'rake'},
    {id: 4, name:'car'},
    {id: 5, name:'falcon'}
  ],
  cart: {1: 3, 4: 1}
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':

      // let newCart = state.get('cart')
      const productId = action.id.toString()

      return state.updateIn(['cart', productId], 1, x => x + 1)

    default:
      return state
  }
}

