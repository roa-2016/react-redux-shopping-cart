import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    // console.log(this.props.cart.has('1'))
    const products = this.props.products.filter( p => {
      return this.props.cart.has(p.get('id').toString())
    })
    const qtys = products.map( p => {
      return this.props.cart.get(p.get('id').toString())
    })
    // console.log(products, qtys)
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            return <div key={idx}>{product.get('name')}: x{qtys.get(idx)}</div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  };
}

export default connect(
  mapStateToProps
)(CartSummary)


