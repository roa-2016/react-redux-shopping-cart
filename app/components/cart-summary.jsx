import React, {Component} from 'react'
import {connect} from 'react-redux'

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
      </div>
    )
  }
}

function calculatePrice(products, cart) {
  let subtotal = 0
  products.forEach(function(product) {
    if(cart.indexOf(product.get('id')) > -1 ) {
      subtotal += product.get('price')
    }
  })
  return subtotal
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
