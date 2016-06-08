import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from './button.jsx'
import { Link, browserHistory } from 'react-router'

class Checkout extends Component {
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
        <h3>Checkout Page</h3>
        <h5>Your Cart</h5>
        <div className='products'>
          {products.map((product, idx) => {
            return (
              <div key={idx} id="items">
                <p>{product.get('name')}: x{qtys.get(idx)}, @ ${product.get('price')} each.  Total: ${qtys.get(idx)*product.get('price')}</p>
              </div>
            )
          })}
          <p>Total: ${this.props.total.toString()}</p>
          <Link to={'/products'}>Keep Shopping</Link>
        </div>

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
)(Checkout)


