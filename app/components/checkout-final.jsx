import React, { Component } from 'react'
import { connect } from 'react-redux'

class CheckOutFinal extends Component {
  componentWillMount(){
    if(!this.props.user){
      window.location.href = '#/'
    }
  }
  buyStuff(e){
    e.preventDefault
    this.props.buyAction()
  }
  render() {
    const { user } = this.props
    const address = user.get('address')
    const email =user.get('email')
    const cc = user.get('cc')
    return (
    <div>
      <h3>Review your information</h3>
      <div>
        <label>Address</label> {address}
      </div>
      <div>
        <label>Email</label> {email}
      </div>
      <div>
        <label>Credit Card</label> { cc }
      </div>
      <button onClick={this.buyStuff.bind(this)}>
        BUY THE THINGS
      </button>
    </div>
  )
  }
}
function mapStateToProps (state) {
    return {
      user: state.get('user')
  }
}

function mapReducersToProps(dispatch) {
  return {
    buyAction: () => {
      dispatch({
        type:'CHECKOUT'
      })
    }
  }
}
export default connect(mapStateToProps, mapReducersToProps)(CheckOutFinal)
