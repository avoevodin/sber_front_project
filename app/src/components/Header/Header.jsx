import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signOutQuery } from '../../redux/actionCreators/authActionCreators'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((store) => store.auth)
  const isLoggedIn = auth?.isLoggedIn
  const signOutHandler = (e) => {
    e.preventDefault()
    dispatch(signOutQuery(navigate))
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex container-fluid">
        {/* TODO how to ignore search params if they was set? */}
        <Link className="navbar-brand" to="/posts">
          Society
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isLoggedIn
              ? (
                <li className="nav-item">
                  <button onClick={signOutHandler} className="btn btn-link link-danger btn-md" type="submit">
                    Sign out
                  </button>
                </li>
              ) : null}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
