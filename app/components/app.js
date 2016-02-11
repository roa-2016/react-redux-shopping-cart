import h from 'vdux/element'
import ProductList from './product-list'

module.exports = function render(state) {
  return h(
    "div",{class: 'app'},
    ProductList(state.get('products'))
  )
}

