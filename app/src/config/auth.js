/* eslint-disable import/prefer-default-export */
import { USER_LS_KEY } from '../settings'

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem(USER_LS_KEY))
  const token = user?.tokensData?.token
  if (token) {
    return { authorization: `Bearer ${token}` }
  }
  return {}
}
