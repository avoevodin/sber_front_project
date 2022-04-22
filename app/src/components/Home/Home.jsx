import { useSelector } from 'react-redux'

const { Link, Navigate } = require('react-router-dom')

const Home = (from = undefined) => {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn)

  if (isLoggedIn) {
    return <Navigate to="/posts" replace />
  }
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Welcome to the Society app!</h1>
      <h4 className="text-muted">
        If you have an account press
        {' '}
        <Link to="/auth/signin" state={{ from }}>Sign in</Link>
        <br />
        or press
        {' '}
        <Link to="/auth/signup" state={{ from }}>Sign up</Link>
        {' '}
        to create an account.
      </h4>
    </div>
  )
}

export default Home
