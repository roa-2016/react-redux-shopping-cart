import React, {Component} from 'react'
import {Link} from 'react-router'

export default class HelloWorld extends Component {

  render() {
    return (
    	<div>
	      <h1>Hello World</h1>
	      <Link to={'/products/'}>Products</Link>
	    </div>
    )
  }

}
