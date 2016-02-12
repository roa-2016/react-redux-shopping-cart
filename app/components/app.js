import h from 'vdux/element'
import ProductList from './product-list'
import router from './routes.js'

import { initialiseApp } from '../actions.js'

function render(state) {
  return router(state.props.get('url'), state.props)
}

function onCreate(){
  return initialiseApp()
}

export default {
  onCreate,
  render
}
