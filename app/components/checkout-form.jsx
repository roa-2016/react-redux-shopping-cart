import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fromJS } from 'immutable'

class CheckOutForm extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.refs.email.value,
      address: this.refs.address.value,
      cc: this.refs.cc.value
    }
    this.props.setUser(user)
    window.location.href = '/#/checkout/final'

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <input ref="email" type="email"></input>
        </div>
        <div>
          <input ref="address" type="text"></input>
        </div>
        <div>
          <input ref="cc" type="number"></input>
        </div>
        <button type="submit">Confirm Information</button>
      </form>
    )
  }
}

function mapReducersToProps(dispatch){
  return {
    setUser: (user) => {
      dispatch({
        type: 'SET_USER',
        user: fromJS(user)
    })
  }
}}

export default connect(undefined, mapReducersToProps)(CheckOutForm)
