import React, {Component} from 'react'
import {connect} from 'react-redux'

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
            return <div key={idx}>{product.get('name')+ 'Qty'+ itemCount(this.props.cart, product.get('id'))}</div>
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

function itemCount(cart, id) {
  var qty = 0
  for (var i=0; i<cart.size; i++) {
    if (cart.get(i) == id) {
      qty++
    }
  }
  return qty
}


export default connect(
  mapStateToProps
)(CartSummary)
