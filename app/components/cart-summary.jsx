import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from './button.jsx'

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
              <div key={idx}>
                <p>{product.get('name')}: x{qtys.get(idx)}</p>
                <Button handleClick={()=>  removeFromCart(product.get('id'))} />
              </div>
            )
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


