import vdux from 'vdux/dom'

import reducer from './app/reducer.js'
import App from './app/components/app.js'

const app = (state)=>{
  console.log(state);
  return App(state)
}

document.addEventListener('DOMContentLoaded', () =>{
  vdux({reducer: reducer, app: app })
 
})
