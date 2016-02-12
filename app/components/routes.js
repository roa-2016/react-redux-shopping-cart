import enroute from 'enroute'

import ProductList from './product-list.js'
import ProductDetail from './product-detail.js'


const router = enroute({
  '/': (params, state)=>{
     return ProductList(state.get('products'))
  },
  '/products/:id': (params, state)=>{
    const product = state.get('products').find((product)=>{return product.get('id')=== Number(params.id)})
    return ProductDetail(product)
  }})

export default router
