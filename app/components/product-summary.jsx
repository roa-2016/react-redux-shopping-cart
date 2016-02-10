import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ProductSummary extends Component {
  render() {
    const name = this.props.product.get('name')
    const id = this.props.product.get('id')
    const price = this.props.product.get('price')
    return (
      <div className='product'>
        <div id="name">{name}&nbsp;</div>
        <div id="price">${price}</div>
        <div>
          <Link to={`/products/${id}`}>View Details</Link>
        </div>
      </div>
    )
  }
}
