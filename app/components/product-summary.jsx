import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ProductSummary extends Component {
  render() {
    const name = this.props.product.get('name')
    const id = this.props.product.get('id')
    const price = this.props.product.get('price')
    console.log(id, name, price, 'product summary print')

    return (
      <div className='product'>

        <div> <h3>{name}</h3>
        <Link to={`/products/${id}`}>View Details</Link></div>
        <div>

        </div>
      </div>
    )
  }
}
