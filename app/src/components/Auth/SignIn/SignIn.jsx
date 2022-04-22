import { useDispatch } from 'react-redux'
import { signInQuery } from '../../../redux/actionCreators/authActionCreators'

const SignIn = () => {
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    dispatch(signInQuery(formData, e))
  }
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={submitHandler} className="d-flex flex-column">
        <div className="mb-3">
          <input
            name="username"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email or username"
          />
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary col-8">
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
