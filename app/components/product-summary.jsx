import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ProductSummary extends Component {
  render() {
    return (
      <div className='product'>
        <div>I'm a product</div>
        <div>
          <Link to={`/products/${this.props.id}`}>View Details</Link>
        </div>
      </div>
    )
  }
}
