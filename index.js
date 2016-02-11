import {createStore} from 'redux'
import vdux from 'vdux/dom'

import reducer from './app/reducer.js'
import App from './app/components/app.js'

const store = createStore(reducer)

const app = (state)=>{
  return App(state)
}

document.addEventListener('DOMContentLoaded', () =>{
  vdux({reducer: reducer, app: app })
})
