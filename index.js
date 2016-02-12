import vdux from 'vdux/dom'

import reducer from './app/reducer.js'
import middleware from './app/middleware.js'
import app from './app/components/app.js'

app.onCreate()

document.addEventListener('DOMContentLoaded', () =>{
  vdux({middleware: middleware, reducer: reducer, app: app.render, initialState: reducer(undefined, {})})
})
