import h from 'vdux/element'

function render(state) {
  const products = state.get('cart').map(productId => {
    return state.get('products').find(product => product.get('id') === Number(productId) )
  })
  return h(
    'div', {id: 'cart'}, [
      h('h4', {}, ['Shopping Cart']),
      ...products.map(product => h('div', {}, product.get('name'))).toArray()
     ]) 
}

export default render
