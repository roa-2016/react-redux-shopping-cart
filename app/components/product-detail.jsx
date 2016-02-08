import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class ProductDetail extends Component {
  render() {
    const {id} = this.props.params
    const product = this.props.products.filter(p => p.get('id') == id ).first()
    const name = product.get('name')
    const price = product.get('price')
    const addToCart = (e) => {
      e.preventDefault()
      this.props.addToCart(id)
    }
    const addToWishlist = (e) => {
      e.preventDefault()
      this.props.addToWishlist(id)
    }
    return (
      <div className='product' id={id}>
        <div> Detailed view of a product</div>
        <h1>{name}</h1>
        <h2>Price: {price}</h2>
        <div><a href='' onClick={addToCart}>Add to Cart</a></div>
        <div><a href='' onClick={addToWishlist}>Add to Wishlist</a></div>
        <div><Link to='/'>View all</Link></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id) => {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        id: parseInt(id)
      })
    },
    addToWishlist: (id) => {
      dispatch({
        type: 'ADD_PRODUCT_TO_WISHLIST',
        id: parseInt(id)
      })
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)
