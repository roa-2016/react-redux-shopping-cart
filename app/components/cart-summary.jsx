import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })

    const removeProduct =(e,id) => {
      e.preventDefault()
      this.props.removeProduct(id)
    }
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
            {products.map((product, idx) => {
              return <div key={idx}>{product.get('name')+ 'Qty'+ itemCount(this.      props.cart, product.get('id')
                        <span></span>
                        {product.get('name')} 
                        <span> </span>
                        <button id="Add">+</button>
                        <button id="Remove" onClick={removeProduct}>-</button>
                    </div>
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

function mapStateToProps(dispatch) {
  return {
    removeProduct: (id) => {
      dispatch ({
        type:'REMOVE_PRODUCT_FROM_CART'
        id:parseInt(id)
      })
    }
  }
}


function itemCount(cart, id) {
  var qty = 0
  for (var i=0; i<cart.size; i++) {
    if (cart.get(i) == id) {
      qty++
    }
  }
  console.log(qty, 'here is quantity')
  return qty
}


export default connect(
  mapStateToProps
)(CartSummary)
