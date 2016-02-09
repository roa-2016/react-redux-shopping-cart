import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })
    let total = 0
    let x = products.map((product, idx) => {
      total += product.get('counter')*product.get('price')
    })
    console.log(total)
    return (
     
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            return <div key={idx}><div>{product.get('name') + ' x ' + product.get('counter')}</div><div>{product.get('counter')*product.get('price')}</div></div>
          })}
          <div> <br /> Total : ${total}</div>
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
