import h from 'vdux/element'
import ProductSummary from './product-summary.js'

function render(state) {
  const productSummaries = state.map( product => 
    h(ProductSummary, product)
  )
  return h('div',{class: 'products'}, productSummaries.toArray()) 
}
export default render
