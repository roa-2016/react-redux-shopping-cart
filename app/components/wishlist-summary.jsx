import React, {Component} from 'react'
import {connect} from 'react-redux'

class WishlistSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.wishlist.includes(p.get('id'))
    })
    return (
      <div id='cart'>
        <h4>Wishlist</h4>
        <div className='products'>
          {products.map((product, idx) => {
            return <div key={idx}>{product.get('name')}</div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    wishlist: state.get('wishlist')
  };
}

export default connect(
  mapStateToProps
)(WishlistSummary)
