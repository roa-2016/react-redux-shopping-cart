import bindUrl from 'redux-effects-location'
const URL_DID_CHANGE = 'URL_DID_CHANGE'

function initialiseApp(){
  console.log('initialise app');
  return [
    bindUrl(urlDidChange)
  ]
}

function urlDidChange(url) {
 console.log('url did change');
 return {
  type: URL_DID_CHANGE,
  payload: url
 } 
}

export {
  initialiseApp,
  URL_DID_CHANGE
}
