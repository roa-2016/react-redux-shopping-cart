import React, {Component} from 'react'
import routes from './routes.jsx'

import { Link } from 'react-router'

export default class App extends Component {

  render() {
    return (
      <div>
        <div id='main'>{routes}</div>
      </div>
    )
  }

}
