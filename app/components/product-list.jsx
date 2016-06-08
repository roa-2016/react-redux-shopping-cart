import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProductSummary from './product-summary.jsx'
import CartSummary from './cart-summary.jsx'

class ProductList extends Component {
  render() {
    const productSummaries = this.props.products.map( product => {
      return <ProductSummary key={product.get('id')} product={product} />
    })
    return (
    	<div id='product-page'>
	    	<section id='productList'>{ productSummaries }</section>
	    	<div id='side'>
	        	<CartSummary />
	      </div>
      </div>
     )
  }
}

const mapStateToProps = (state) => ({products: state.get('products')})

export default connect(mapStateToProps)(ProductList)
