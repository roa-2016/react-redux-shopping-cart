import vdux from 'vdux/dom'

import reducer from './app/reducer.js'
import app from './app/components/app.js'

document.addEventListener('DOMContentLoaded', () =>{
  vdux({reducer: reducer, app: app, initialState: reducer(undefined, {})})
})
