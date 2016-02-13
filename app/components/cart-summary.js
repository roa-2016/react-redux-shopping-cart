import h from 'vdux/element'

function render(state) {
  console.log(state);
  const products = state.cartItems.map(item => {
    return state.products.find(product => product.id === item.id )
  })
  return h(
    'div', {id: 'cart'}, [
      h('h4', {}, ['Shopping Cart']),
      ...products.map(product => h('div', {}, product.name))
     ]) 
}

export default render
