import h from 'vdux/element'
import ProductSummary from './product-summary.js'

function render(state) {
  const productSummaries = state.map( product => {
    return ProductSummary(product)
  })
  console.log(productSummaries.toArray());
  return h('div', productSummaries.toArray()) 
}
export default render
