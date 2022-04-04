import { SET_FILTER } from '../types/filterTypes'

// eslint-disable-next-line import/prefer-default-export
export const setFilter = (newFilter) => ({
  type: SET_FILTER,
  payload: newFilter,
})
