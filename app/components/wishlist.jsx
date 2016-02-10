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
            let removeProductWishlist = (e) => {
              this.props.removeProductWishlist(product.get('id'))
            }
            return <div key={idx}>{product.get('name')} ${product.get('price')} <button onClick={removeProductWishlist}>Remove from Wishlist</button></div>
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeProductWishlist: (id) => {
      dispatch({
        type: 'REMOVE_PRODUCT_FROM_WISHLIST',
        id: parseInt(id)
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishList)
