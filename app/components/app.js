import h from 'vdux/element'
import ProductList from './product-list'
import router from './routes.js'

import initialiseApp from '../actions.js'

function render(state) {
  return router(state.get('url'), state)
}

function onCreate(){
  console.log('creating');
  return initialiseApp
}

export default {
  onCreate,
  render
}
