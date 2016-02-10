import React, {Component} from 'react'
import {connect} from 'react-redux'
import calculatePrice from '../lib/subtotalCalc.js'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })

    const subtotal = calculatePrice(this.props.products, this.props.cart)

    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            let removeProduct = (e) => {
              this.props.removeProduct(product.get('id'))
            }
            return <div key={idx}>{product.get('name')} ${product.get('price')} <button onClick={removeProduct}>Remove from cart</button></div>
          })}
        </div>
        <div className='subtotal'>
          <h2>subtotal</h2>
          <p>${subtotal}</p>
        </div>
        <button>Checkout</button>
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

function mapDispatchToProps(dispatch) {
  return {
    removeProduct: (id) => {
      dispatch({
        type: 'REMOVE_PRODUCT_FROM_CART',
        id: parseInt(id)
      })
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSummary)
