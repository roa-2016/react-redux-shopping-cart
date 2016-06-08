import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import CartSummary from './cart-summary.jsx'


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
    return (
      <div>
        <section className='product' id={id}>
          <div>
            <p>This is {name}</p>
            <p>Price: ${price}</p>
          </div>
          <div><a href='' onClick={addToCart}>Add to Cart</a></div>
          <div><Link to='/products'>View all</Link></div>
        </section>
        <div id='side'>
              <CartSummary />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({products: state.get('products')})

const mapDispatchToProps = (dispatch) => (
  {
    addToCart: (id) => { 
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        id: parseInt(id)
      })
    }
  }
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)
