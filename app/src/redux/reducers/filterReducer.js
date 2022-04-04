const { SET_FILTER } = require('../types/filterTypes')

// eslint-disable-next-line default-param-last
const filterReducer = (store = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload

    default:
      return store
  }
}

export default filterReducer
