import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from './button.jsx'
import { Link, browserHistory } from 'react-router'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter( p => {
      return this.props.cart.has(p.get('id').toString())
    })
    const qtys = products.map( p => {
      return this.props.cart.get(p.get('id').toString())
    })
    const removeFromCart = (productId) => {
      this.props.removeFromCart(productId)
    }

    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            return (
              <div key={idx} id="items">
                <p>{product.get('name')}: x{qtys.get(idx)}</p>
                <Button handleClick={()=>  removeFromCart(product.get('id'))} />
              </div>
            )
          })}
          <p>Total: ${this.props.total.toString()}</p>
        </div>
        <Link to={'/checkout/'}>Checkout</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart'),
    total: state.get('Total')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (id) => { 
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


