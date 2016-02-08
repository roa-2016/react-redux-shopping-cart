import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ProductDetail extends Component {
  render() {
    const {id} = this.props.params
    return (
      <div className='product' id={id}>
        <div> Detailed view of a product {id}</div>
        <div><Link to='/'>View all</Link></div>
      </div>
    )
  }
}
