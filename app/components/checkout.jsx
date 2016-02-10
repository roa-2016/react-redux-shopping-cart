import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createStore} from 'redux'

class Checkout extends Component {
  render() {

    })
    return (
      <div id='checkout'>
        <h4>Checkout</h4>
        <div className='products'>
          {products.map((product, idx) => {
            return <div key={idx}>{product.get('qty')+ 1} {product.get('name')}<button id="plus" >+</button><button id="minus" >-</button></div>
          })}
        </div>
        <div><Link to={`/`}>Checkout</div>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  };
}

export default connect(
  mapStateToProps
)(Checkout)
