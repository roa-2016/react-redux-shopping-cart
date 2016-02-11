import h from 'vdux/element'
import ProductSummary from './product-summary.js'

render(state) {
  const productSummaries = state.map( product => {
    return ProductSummary(product)
  })
  return h('#productList', productSummaries ) 
}
export default render
