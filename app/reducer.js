import {fromJS} from 'immutable'

export default (store, action) => {
  return fromJS({products: [1,2,3,4,5]})
}
