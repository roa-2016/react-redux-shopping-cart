import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Checkout extends Component {
  componentWillMount() {
    if(this.props.user){
      window.location.href = '/#/checkout/final'
    }
  }
  render() {
    return (
      <div>
        <h1>Checkout</h1>
        {this.props.children}
        <div>
          <Link to='/'>Lemme shop more bruh</Link>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
    return {
      user: state.get('user')
  }
}

function mapReducersToProps () {
  return {}
}

export default connect(mapStateToProps, mapReducersToProps)(Checkout)
