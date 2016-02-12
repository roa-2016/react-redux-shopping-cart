import sheetRouter from 'sheet-router'
import h from 'vdux/element'

import ProductList from './product-list.js'
import ProductDetail from './product-detail.js'


const router = sheetRouter('/404', function(route) {
  console.log('in router');
  return [
    route('/', (params, h, state)=>{return ProductList(state.get('products'))}),
    route('/products/:id', (params, h, state)=>{
      const product = state.get('products').find((product)=>{return product.get('id')=== Number(params.id)})
      return ProductDetail(product)
    })
  ] 
})

export default router
