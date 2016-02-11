import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createStore} from 'redux'
import {Link} from 'react-router'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })
    const removeProduct = (e, id) => {
      e.preventDefault()
      this.props.removeProduct(id)
    }
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
          <div><a href='#/checkout'>Checkout</a></div>
        <div className='products'>
          {products.map((product, idx) => {
            return <div key={idx}>{product.get('qty')+ 1}
              <span> </span>
               {product.get('name')}
               <span> </span>
               <button id="plus">+</button>
               <button id="minus" onClick={removeProduct} >-</button>
               </div>
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeProduct: (id) => {
      dispatch ({
        type: 'REMOVE_PRODUCT_FROM_CART',
        id: parseInt(id)
      })
    }
  }
}

export default connect(
  mapStateToProps
)(CartSummary)
