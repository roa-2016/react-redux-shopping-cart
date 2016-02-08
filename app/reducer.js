import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti'},
    {id: 2, name:'gold'},
    {id: 3, name:'rake'},
    {id: 4, name:'car'},
    {id: 5, name:'falcon'}
  ]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}
