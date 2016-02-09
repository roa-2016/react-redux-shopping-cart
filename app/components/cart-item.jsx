import React, { Component } from 'React'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'


class CartItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { name, qty } = this.props
    const addOne = (e) => {
      e.preventDefault()
      this.props.addOne(this.props.id)
    }
    const subtractOne = (e) => {
      e.preventDefault()
      this.props.subtractOne(this.props.id)
    }
    return (
      <div>
        {name}
        <span>{qty}</span>
        <span><button onClick={addOne}>+</button></span>
        <span><button onClick={subtractOne}>-</button></span>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addOne: (id) => {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        id: parseInt(id)
      })
    },
    subtractOne: (id) => {
      dispatch({
        type: 'REMOVE_PRODUCT_FROM_CART',
        id: parseInt(id)
      })
    }
  }
}

export default connect(undefined ,mapDispatchToProps)(CartItem)
