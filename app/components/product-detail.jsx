import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class ProductDetail extends Component {
  render() {
    const {id} = this.props.params
    const product = this.props.products.filter(p => p.get('id') == id ).first()
    const name = product.get('name')
    return (
      <div className='product' id={id}>
        <div> Detailed view of a product {name}</div>
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

export default connect(
  mapStateToProps
)(ProductDetail)
