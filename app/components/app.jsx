import React, {Component} from 'react'
import routes from './routes.jsx'
import CartSummary from './cart-summary.jsx'
import HelloWorld from './hello-world.jsx'

export default class App extends Component {

  render() {
    return (
      <div>
        <div id='main'><HelloWorld /> <h1> Welcome to Karearea Kars</h1></div>
        
        <div id='main'>{routes}</div>
        <div id='side'><CartSummary /></div>
      </div>
    )
  }

}
