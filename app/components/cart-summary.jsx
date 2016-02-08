import React, {Component} from 'react'
import {connect} from 'react-redux'
import Subtotal from './subtotal.jsx'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            return <div key={idx}>{product.get('name')}
              <span className='qty'>: 
                {
                  this.props.cart.filter((p) => { return p === product.get('id') }).size
              }</span>
            </div>
          })}
        </div>
        <Subtotal />
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addOne: (id) => {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        id: parseInt(id)
      })
    },
    subtractOne: (id) => {
      dispatch({
        type: 'REMOVE_PRODUCT_FROM_CART',
        id: parseInt(id)
      })
    },
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
