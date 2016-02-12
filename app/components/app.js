import h from 'vdux/element'
import ProductList from './product-list'
import router from './routes.js'

module.exports = function render(state) {
  return router('/', h, state)
}

