import sheetRouter from 'sheet-router'
import h from 'vdux/element'

import ProductList from './product-list.js'
import ProductDetail from './product-detail.js'


const router = sheetRouter('/404', function(route) {
  return [
    route('/', (params, h, state)=>{return ProductList(state.get('products'))})
  ] 
})

export default router
