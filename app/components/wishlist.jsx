import React, {Component} from 'react'
import {connect} from 'react-redux'

class WishList extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.wishlist.includes(p.get('id'))
    })
    return (
      <div id='wishlist'>
        <h4>Wish List</h4>
        <div className='products'>
          {products.map((product, idx) => {
            return <div key={idx}>{product.get('name')} <button>Remove from Wishlist</button></div>
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
)(WishList)
