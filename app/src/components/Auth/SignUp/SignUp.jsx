import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { signUpQuery } from '../../../redux/actionCreators/authActionCreators'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const submitHandler = (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    dispatch(signUpQuery(formData, e, () => navigate(from, { replace: true })))
  }

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={submitHandler} className="d-flex flex-column">
        <div className="mb-3">
          <input
            name="email"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <input
            name="username"
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <input
            name="avatar"
            type="text"
            className="form-control"
            placeholder="Link to avatar"
          />
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
            Create an account
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
