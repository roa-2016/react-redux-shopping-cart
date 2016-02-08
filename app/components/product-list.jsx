import React, {Component} from 'react'
import ProductSummary from './product-summary.jsx'
import {connect} from 'react-redux'

class ProductList extends Component {
  render() {
    const productSummaries = this.props.products.map( (product, idx) => {
      return <ProductSummary key={idx} product={product} id={idx+1}/>
    })
    return <div id='productList'> { productSummaries } </div>
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  };
}

export default connect(mapStateToProps)(ProductList)
