import { bindUrl } from 'redux-effects-location'
const URL_DID_CHANGE = 'URL_DID_CHANGE'

function initialiseApp(){
  return [
    bindUrl(urlDidChange)
  ]
}

function urlDidChange(url) {
 return {
  type: URL_DID_CHANGE,
  payload: url
 } 
}

export {
  initialiseApp,
  URL_DID_CHANGE
}
