import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price: 25.00},
    {id: 2, name:'gold', price: 20.00},
    {id: 3, name:'rake', price: 15.00},
    {id: 4, name:'car', price: 10.00},
    {id: 5, name:'falcon', price: 5.00}
  ],
  cart: { 1: 4, 3: 7},
  Total: "$0.00"
})


export default (state = INITIAL_STATE, action) => {
  const total = () => {
    let total =0
    state.get('products')
    .filter( p => {
      return state.get('cart')
        .has(p.get('id').toString())
    })
    .map( p => {
      total += state.get('cart')
        .get(p.get('id').toString())
        * p.get('price')
    })
    return total
  }
  
  
  console.log("total", total())

  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      let productId = action.id.toString()
      return state
        .updateIn(['cart', productId], 1, x => x + 1)
        .updateIn(['Total'], total)
    case 'REMOVE_PRODUCT_FROM_CART':
      return (state.get('cart').get(action.id.toString()) == 1) ? 
        state
          .deleteIn(['cart',action.id.toString()])
          .updateIn(['Total'], total)      
        :state
          .updateIn(['cart', action.id.toString()],0,x => x===0 ? x: x - 1)
          .updateIn(['Total'], total)

    default:
      return state
  }
}

