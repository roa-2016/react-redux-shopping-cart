import React, { Component } from 'react'
import {connect} from 'react-redux'

class Subtotal extends Component {
  render() {
    return(

      <div className="subtotal">
        <strong>Subtotal: </strong>{this.props.subtotal}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    subtotal: state.get('subtotal')
  };
}

export default connect(mapStateToProps)(Subtotal)
