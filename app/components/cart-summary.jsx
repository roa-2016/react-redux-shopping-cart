import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })
    const cartArray = this.props.cart.toJS()
    const counts = amountOfItem(cartArray)
    console.log(counts)
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            let removeProduct = (e) => {
              this.props.removeProduct(product.get('id'))
            }
            return(
              <div key={idx}>
                {product.get('name')}
                <span className='amount'>Amount:{counts[product.get('id')]}</span>
                <button className='deleteButton' onClick={removeProduct}>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function amountOfItem(array){
  let result = {}

  if(array instanceof Array)
    array.forEach(function (v, i){
      if (!result[v]) {
        result[v] = 1
      } else {
        result[v]++
      }
    })
  return result
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
  // amountOfItem
)(CartSummary)
