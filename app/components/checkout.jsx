import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {createStore} from 'redux'

class Checkout extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })
    return (
      <div id='checkout'>
        <div className='theProducts' id={id}>
          {products.map((product, idx) => {
            return <div key={idx}>{product.get('qty')+ 1}{product.get('name')}</div>
          })}
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    products: state.get('products')
  };
}

export default connect(
  mapStateToProps
)(Checkout)
