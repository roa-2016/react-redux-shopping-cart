import React, {Component} from 'react'

import Routes from './routes.jsx'


export default class App extends Component {
  render() {
    return <Provider store={store}><Routes /></Provider>
  }
}
