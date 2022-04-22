import { REGISTER_SUCCESS } from '../types/authTypes'

export const signUp = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
})

export const signUpQuery = (formData, e) => async (dispatch) => {
  const res = await fetch('http://localhost:3008/api/v1/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (res.status === 200) {
    const userDataFromServer = await res.json()

    dispatch(signUp(userDataFromServer.userData))
    e.target.reset()
  }
}

export const signInQuery = () => {

}
