import React, {Component} from 'react'
import ProductSummary from './product-summary.jsx'

export default class ProductList extends Component {

  render() {
    //const {products} = this.props
    const products = [1,2,3].map( (product, idx) => {
      return <ProductSummary key={idx} product={product} id={idx+1}/>
    })
    return <div id='productList'> { products } </div>
  }

}
